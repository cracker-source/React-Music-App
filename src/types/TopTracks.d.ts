interface TopTracks {
    chartEntryData: ChartEntryData;
    trackMetadata: TrackMetadata;
}

interface TrackMetadata {
    trackName: string;
    trackUri: string;
    displayImageUri: string;
    artists: Artist[];
    labels: Label[];
    releaseDate?: string;
}

interface Label {
    name: string;
}

interface Artist {
    name: string;
    spotifyUri: string;
}

interface ChartEntryData {
    currentRank: number;
    previousRank: number;
    peakRank: number;
    appearancesOnChart: number;
    consecutiveAppearancesOnChart: number;
    rankingMetric: RankingMetric;
    entryStatus: string;
    peakDate: string;
    entryRank: number;
    entryDate: string;
}

interface RankingMetric {
    value: string;
    type: string;
}