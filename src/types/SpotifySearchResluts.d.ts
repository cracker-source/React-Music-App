interface SpotifySearchResults {
    albums: SearchResultAlbums;
    artists: SearchReslutArtists2;
    episodes: SearchReslutEpisodes;
    genres: SearchReslutGenres;
    playlists: SearchResultPlaylists;
    podcasts: SearchReslutPodcasts;
    topResults: SearchReslutTopResults;
    tracks: SearchResultTracks;
    users: SearchResultUsers;
}

interface SearchResultUsers {
    totalCount: number;
    items: Item11[];
}

interface Item11 {
    data: Data9;
}

interface Data9 {
    uri: string;
    id: string;
    displayName: string;
    username: string;
    image: Image2;
}

interface Image2 {
    smallImageUrl?: string;
    largeImageUrl?: string;
}

interface SearchResultTracks {
    totalCount: number;
    items: Item10[];
}

interface Item10 {
    data: Data8;
}

interface Data8 {
    uri: string;
    id: string;
    name: string;
    albumOfTrack: AlbumOfTrack;
    artists: Artists;
    contentRating: ContentRating;
    duration: Duration;
    playability: Playability;
}

interface SearchReslutTopResults {
    items: Item9[];
    featured: Featured[];
}

interface Featured {
    data: Data7;
}

interface Data7 {
    uri: string;
    name: string;
    description: string;
    images: Images2;
    owner: Profile;
}

interface Item9 {
    data: Data6;
}

interface Data6 {
    uri: string;
    profile?: Profile;
    visuals?: Visuals;
    id?: string;
    name?: string;
    albumOfTrack?: AlbumOfTrack;
    artists?: Artists;
    contentRating?: ContentRating;
    duration?: Duration;
    playability?: Playability;
    description?: string;
    images?: Images2;
    owner?: Profile;
    coverArt?: CoverArt;
    date?: Date;
    type?: string;
    publisher?: Profile;
    mediaType?: string;
    releaseDate?: ReleaseDate;
    podcast?: Podcast;
    displayName?: string;
    username?: string;
    image?: Image;
}

interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
}

interface Images2 {
    items: Item8[];
}

interface Item8 {
    sources: Source3[];
}

interface Source3 {
    url: string;
    width?: any;
    height?: any;
}

interface Playability {
    playable: boolean;
}

interface AlbumOfTrack {
    uri: string;
    name: string;
    coverArt: CoverArt;
    id: string;
    sharingInfo: SharingInfo;
}

interface SharingInfo {
    shareUrl: string;
}

interface SearchReslutPodcasts {
    totalCount: number;
    items: Item7[];
}

interface Item7 {
    data: Data5;
}

interface Data5 {
    uri: string;
    name: string;
    coverArt: CoverArt;
    type: string;
    publisher: Profile;
    mediaType: string;
}

interface SearchResultPlaylists {
    totalCount: number;
    items: Item6[];
}

interface Item6 {
    data: Data4;
}

interface Data4 {
    uri: string;
    name: string;
    description: string;
    images: Images;
    owner: Profile;
}

interface Images {
    items: Item5[];
}

interface Item5 {
    sources: Source2[];
}

interface Source2 {
    url: string;
    width?: number;
    height?: number;
}

interface SearchReslutGenres {
    totalCount: number;
    items: any[];
}

interface SearchReslutEpisodes {
    totalCount: number;
    items: Item4[];
}

interface Item4 {
    data: Data3;
}

interface Data3 {
    uri: string;
    name: string;
    coverArt: CoverArt;
    duration: Duration;
    releaseDate: ReleaseDate;
    podcast: Podcast;
    description: string;
    contentRating: ContentRating;
}

interface ContentRating {
    label: string;
}

interface Podcast {
    coverArt: CoverArt;
}

interface ReleaseDate {
    isoString: string;
}

interface Duration {
    totalMilliseconds: number;
}

interface SearchReslutArtists2 {
    totalCount: number;
    items: Item3[];
}

interface Item3 {
    data: Data2;
}

interface Data2 {
    uri: string;
    profile: Profile;
    visuals: Visuals;
}

interface Visuals {
    avatarImage: CoverArt;
}

interface SearchResultAlbums {
    totalCount: number;
    items: Item2[];
}

interface Item2 {
    data: Data;
}

interface Data {
    uri: string;
    name: string;
    artists: Artists;
    coverArt: CoverArt;
    date: Date;
}

interface Date {
    year: number;
}

interface CoverArt {
    sources: Source[];
}

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Artists {
    items: Item[];
}

interface Item {
    uri: string;
    profile: Profile;
}

interface Profile {
    name: string;
}