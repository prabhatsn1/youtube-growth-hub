import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
    favoriteCount: string;
  };
  tags?: string[];
  categoryId: string;
}

export interface YouTubeChannel {
  id: string;
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    videoCount: string;
  };
}

export interface YouTubeAnalytics {
  views: number;
  estimatedMinutesWatched: number;
  averageViewDuration: number;
  subscribersGained: number;
  likes: number;
  comments: number;
  shares: number;
  date: string;
}

class YouTubeService {
  async getChannelDetails(channelId: string): Promise<YouTubeChannel | null> {
    try {
      const response = await youtube.channels.list({
        part: ["snippet", "statistics"],
        id: [channelId],
      });

      const channel = response.data.items?.[0];
      if (!channel) return null;

      return {
        id: channel.id!,
        title: channel.snippet?.title || "",
        description: channel.snippet?.description || "",
        customUrl: channel.snippet?.customUrl || "",
        publishedAt: channel.snippet?.publishedAt || "",
        thumbnails: {
          default: { url: channel.snippet?.thumbnails?.default?.url || "" },
          medium: { url: channel.snippet?.thumbnails?.medium?.url || "" },
          high: { url: channel.snippet?.thumbnails?.high?.url || "" },
        },
        statistics: {
          viewCount: channel.statistics?.viewCount || "0",
          subscriberCount: channel.statistics?.subscriberCount || "0",
          videoCount: channel.statistics?.videoCount || "0",
        },
      };
    } catch (error) {
      console.error("Error fetching channel details:", error);
      return null;
    }
  }

  async getChannelVideos(
    channelId: string,
    maxResults: number = 50
  ): Promise<YouTubeVideo[]> {
    try {
      // First get the uploads playlist ID
      const channelResponse = await youtube.channels.list({
        part: ["contentDetails"],
        id: [channelId],
      });

      const uploadsPlaylistId =
        channelResponse.data.items?.[0]?.contentDetails?.relatedPlaylists
          ?.uploads;
      if (!uploadsPlaylistId) return [];

      // Get videos from uploads playlist
      const playlistResponse = await youtube.playlistItems.list({
        part: ["snippet"],
        playlistId: uploadsPlaylistId,
        maxResults,
      });

      const videoIds =
        playlistResponse.data.items
          ?.map((item) => item.snippet?.resourceId?.videoId)
          .filter(Boolean) || [];

      if (videoIds.length === 0) return [];

      // Get detailed video information
      const videosResponse = await youtube.videos.list({
        part: ["snippet", "statistics"],
        id: videoIds as string[],
      });

      return (
        videosResponse.data.items?.map((video) => ({
          id: video.id!,
          title: video.snippet?.title || "",
          description: video.snippet?.description || "",
          publishedAt: video.snippet?.publishedAt || "",
          thumbnails: {
            default: { url: video.snippet?.thumbnails?.default?.url || "" },
            medium: { url: video.snippet?.thumbnails?.medium?.url || "" },
            high: { url: video.snippet?.thumbnails?.high?.url || "" },
          },
          statistics: {
            viewCount: video.statistics?.viewCount || "0",
            likeCount: video.statistics?.likeCount || "0",
            commentCount: video.statistics?.commentCount || "0",
            favoriteCount: video.statistics?.favoriteCount || "0",
          },
          tags: video.snippet?.tags || undefined,
          categoryId: video.snippet?.categoryId || "",
        })) || []
      );
    } catch (error) {
      console.error("Error fetching channel videos:", error);
      return [];
    }
  }

  async searchVideos(
    query: string,
    maxResults: number = 25
  ): Promise<YouTubeVideo[]> {
    try {
      const searchResponse = await youtube.search.list({
        part: ["snippet"],
        q: query,
        type: ["video"],
        maxResults,
        order: "relevance",
      });

      const videoIds =
        searchResponse.data.items
          ?.map((item) => item.id?.videoId)
          .filter(Boolean) || [];

      if (videoIds.length === 0) return [];

      const videosResponse = await youtube.videos.list({
        part: ["snippet", "statistics"],
        id: videoIds as string[],
      });

      return (
        videosResponse.data.items?.map((video) => ({
          id: video.id!,
          title: video.snippet?.title || "",
          description: video.snippet?.description || "",
          publishedAt: video.snippet?.publishedAt || "",
          thumbnails: {
            default: { url: video.snippet?.thumbnails?.default?.url || "" },
            medium: { url: video.snippet?.thumbnails?.medium?.url || "" },
            high: { url: video.snippet?.thumbnails?.high?.url || "" },
          },
          statistics: {
            viewCount: video.statistics?.viewCount || "0",
            likeCount: video.statistics?.likeCount || "0",
            commentCount: video.statistics?.commentCount || "0",
            favoriteCount: video.statistics?.favoriteCount || "0",
          },
          tags: video.snippet?.tags || undefined,
          categoryId: video.snippet?.categoryId || "",
        })) || []
      );
    } catch (error) {
      console.error("Error searching videos:", error);
      return [];
    }
  }

  async getTrendingVideos(
    regionCode: string = "US",
    categoryId?: string
  ): Promise<YouTubeVideo[]> {
    try {
      const response = await youtube.videos.list({
        part: ["snippet", "statistics"],
        chart: "mostPopular",
        regionCode,
        videoCategoryId: categoryId,
        maxResults: 50,
      });

      return (
        response.data.items?.map((video) => ({
          id: video.id!,
          title: video.snippet?.title || "",
          description: video.snippet?.description || "",
          publishedAt: video.snippet?.publishedAt || "",
          thumbnails: {
            default: { url: video.snippet?.thumbnails?.default?.url || "" },
            medium: { url: video.snippet?.thumbnails?.medium?.url || "" },
            high: { url: video.snippet?.thumbnails?.high?.url || "" },
          },
          statistics: {
            viewCount: video.statistics?.viewCount || "0",
            likeCount: video.statistics?.likeCount || "0",
            commentCount: video.statistics?.commentCount || "0",
            favoriteCount: video.statistics?.favoriteCount || "0",
          },
          tags: video.snippet?.tags || undefined,
          categoryId: video.snippet?.categoryId || "",
        })) || []
      );
    } catch (error) {
      console.error("Error fetching trending videos:", error);
      return [];
    }
  }
}

export const youtubeService = new YouTubeService();
