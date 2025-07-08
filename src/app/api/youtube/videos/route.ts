import { NextRequest, NextResponse } from "next/server";
import { youtubeService } from "@/lib/youtube-service";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get("channelId");
    const maxResults = parseInt(searchParams.get("maxResults") || "50");

    if (!channelId) {
      return NextResponse.json(
        { error: "Channel ID is required" },
        { status: 400 }
      );
    }

    const videos = await youtubeService.getChannelVideos(channelId, maxResults);

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error in /api/youtube/videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
