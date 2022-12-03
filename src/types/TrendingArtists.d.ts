interface TrendingArtistsSpotifyScrapper {
    status: boolean;
    type: string;
    id: string;
    title: string;
    description: string;
    date: string;
    artists: Artist[];
}

interface Artist {
    type: string;
    id: string;
    name: string;
    shareUrl: string;
    visuals: Visuals;
    chartData: ChartData;
}

interface ChartData {
    currentRank: number;
    previousRank: number;
    peakRank: number;
    peakDate: string;
    entryRank: number;
    entryDate: string;
    appearancesOnChart: number;
    consecutiveAppearancesOnChart: number;
}

interface Visuals {
    avatar: Avatar[];
}

interface Avatar {
    url: string;
    width?: any;
    height?: any;
}