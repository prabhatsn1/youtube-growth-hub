import { NextRequest, NextResponse } from "next/server";
import { youtubeService } from "@/lib/youtube-service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const regionCode = searchParams.get("regionCode") || "US";
    const categoryId = searchParams.get("categoryId") || undefined;

    const videos = await youtubeService.getTrendingVideos(
      regionCode,
      categoryId
    );

    // Process trending data to extract hashtags and topics
    const trendingTopics = videos.map((video) => {
      const tags = video.tags || [];
      const views = parseInt(video.statistics.viewCount);
      const likes = parseInt(video.statistics.likeCount);

      return {
        id: video.id,
        title: video.title,
        tags,
        views,
        likes,
        publishedAt: video.publishedAt,
        categoryId: video.categoryId,
      };
    });

    // Extract popular hashtags
    const hashtagFrequency: Record<
      string,
      { count: number; totalViews: number; category: string }
    > = {};

    trendingTopics.forEach((topic) => {
      topic.tags.forEach((tag) => {
        const hashtag = tag.startsWith("#") ? tag : `#${tag}`;
        if (!hashtagFrequency[hashtag]) {
          hashtagFrequency[hashtag] = {
            count: 0,
            totalViews: 0,
            category: getCategoryName(topic.categoryId),
          };
        }
        hashtagFrequency[hashtag].count++;
        hashtagFrequency[hashtag].totalViews += topic.views;
      });
    });

    // Convert to trending format
    const trending = Object.entries(hashtagFrequency)
      .map(([hashtag, data]) => ({
        hashtag,
        category: data.category,
        growth: Math.floor(Math.random() * 300) + 50, // Simulated growth percentage
        status: "up" as const,
        searchVolume: formatNumber(data.totalViews),
        difficulty: getDifficulty(data.count),
        count: data.count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    return NextResponse.json(trending);
  } catch (error) {
    console.error("Error in /api/youtube/trending:", error);
    return NextResponse.json(
      { error: "Failed to fetch trending data" },
      { status: 500 }
    );
  }
}

function getCategoryName(categoryId: string): string {
  const categories: Record<string, string> = {
    "1": "Film & Animation",
    "2": "Autos & Vehicles",
    "10": "Music",
    "15": "Pets & Animals",
    "17": "Sports",
    "19": "Travel & Events",
    "20": "Gaming",
    "22": "People & Blogs",
    "23": "Comedy",
    "24": "Entertainment",
    "25": "News & Politics",
    "26": "Howto & Style",
    "27": "Education",
    "28": "Science & Technology",
  };

  return categories[categoryId] || "Technology";
}

function getDifficulty(count: number): "Easy" | "Medium" | "High" {
  if (count < 5) return "Easy";
  if (count < 15) return "Medium";
  return "High";
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}
