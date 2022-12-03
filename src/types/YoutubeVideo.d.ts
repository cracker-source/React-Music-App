interface YoutubeVideo {
    contents: Content[];
}

interface Content {
    video: Video;
}

interface Video {
    channelId: string;
    channelName: string;
    lengthText: string;
    publishedTimeText: string;
    thumbnails: Thumbnail[];
    title: string;
    videoId: string;
    viewCountText: string;
}

interface Thumbnail {
    height: number;
    url: string;
    width: number;
}