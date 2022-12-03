interface IndividualArtist {
    data: Data;
    extensions: Extensions;
}

interface Extensions {
    cacheControl: CacheControl;
}

interface CacheControl {
    version: number;
    hints: any[];
}

interface Data {
    artist: IndividualArtistData;
}

interface IndividualArtistData {
    id: string;
    uri: string;
    following: boolean;
    sharingInfo: SharingInfo;
    profile: Profile;
    visuals: Visuals;
    discography: Discography;
    stats: Stats;
    relatedContent: RelatedContent;
    goods: Goods;
}

interface Goods {
    events: Events;
    merch: Merch;
}

interface Merch {
    items: Item18[];
}

interface Item18 {
    uri: string;
    description: string;
    imageUri: string;
    name: string;
    url: string;
}

interface Events {
    userLocation: Owner;
    concerts: Concerts;
}

interface Concerts {
    totalCount: number;
    items: Item17[];
    pagingInfo: PagingInfo;
}

interface PagingInfo {
    limit: number;
}

interface Item17 {
    uri: string;
    id: string;
    title: string;
    category: string;
    festival: boolean;
    nearUser: boolean;
    venue: Venue;
    artists: Artists2;
    partnerLinks: PartnerLinks;
    date: Date3;
}

interface Date3 {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    isoString: string;
    precision: string;
}

interface PartnerLinks {
    items: Item16[];
}

interface Item16 {
    partnerName: string;
    url: string;
}

interface Artists2 {
    items: Item15[];
}

interface Item15 {
    uri: string;
    id: string;
    profile: Owner;
}

interface Venue {
    name: string;
    location: Owner;
    coordinates: Coordinates;
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface RelatedContent {
    appearsOn: AppearsOn;
    featuring: Featuring;
    discoveredOn: Featuring;
    relatedArtists: RelatedArtists;
}

interface RelatedArtists {
    totalCount: number;
    items: Item14[];
}

interface Item14 {
    id: string;
    uri: string;
    profile: Owner;
    visuals: Visuals2;
}

interface Visuals2 {
    avatarImage: Item4;
}

interface Featuring {
    totalCount: number;
    items: Item13[];
}

interface Item13 {
    uri: string;
    id: string;
    owner: Owner;
    name: string;
    description: string;
    images: Images2;
}

interface Images2 {
    totalCount: number;
    items: Item2[];
}

interface AppearsOn {
    totalCount: number;
    items: Item12[];
}

interface Item12 {
    releases: Releases2;
}

interface Releases2 {
    totalCount: number;
    items: Item11[];
}

interface Item11 {
    uri: string;
    id: string;
    name: string;
    artists: FromIndividualArtist;
    coverArt: Item4;
    date: Date;
    sharingInfo: SharingInfo;
}

interface Stats {
    followers: number;
    monthlyListeners: number;
    worldRank: number;
    topCities: TopCities;
}

interface TopCities {
    items: Item10[];
}

interface Item10 {
    numberOfListeners: number;
    city: string;
    country: string;
    region: string;
}

interface Discography {
    latest: Latest;
    popularReleases: PopularReleases;
    singles: PopularReleases;
    albums: PopularReleases;
    compilations: PopularReleases;
    topTracks: TopTracks;
}

interface TopTracks {
    items: Item9[];
}

interface Item9 {
    uid: string;
    track: IndividualArtistTrack;
}

interface IndividualArtistTrack {
    id: string;
    uri: string;
    name: string;
    playcount: string;
    discNumber: number;
    duration: Duration;
    playability: Playability;
    contentRating: ContentRating;
    artists: FromIndividualArtist;
    album: Album;
}

interface Album {
    uri: string;
    coverArt: CoverArt;
}

interface CoverArt {
    sources: Source3[];
}

interface Source3 {
    url: string;
}

interface FromIndividualArtist {
    items: Item8[];
}

interface Item8 {
    uri: string;
    profile: Owner;
}

interface ContentRating {
    label: string;
}

interface Duration {
    totalMilliseconds: number;
}

interface PopularReleases {
    totalCount: number;
    items: Item7[];
}

interface Item7 {
    releases: Releases;
}

interface Releases {
    items: Item6[];
}

interface Item6 {
    id: string;
    uri: string;
    name: string;
    type: string;
    copyright: Copyright;
    date: Date2;
    coverArt: Item4;
    tracks: Tracks;
    label: string;
    playability: Playability;
    sharingInfo: SharingInfo;
}

interface Date2 {
    year: number;
    month: number;
    day: number;
    precision: string;
}

interface Latest {
    id: string;
    uri: string;
    name: string;
    type: string;
    copyright: Copyright;
    date: Date;
    coverArt: Item4;
    tracks: Tracks;
    label: string;
    playability: Playability;
}

interface Playability {
    playable: boolean;
    reason: string;
}

interface Tracks {
    totalCount: number;
}

interface Date {
    year: number;
}

interface Copyright {
    items: Item5[];
}

interface Item5 {
    type: string;
    text: string;
}

interface Visuals {
    gallery: Gallery;
    avatarImage: AvatarImage;
    headerImage: AvatarImage;
}

interface AvatarImage {
    sources: Source2[];
    extractedColors: ExtractedColors;
}

interface ExtractedColors {
    colorRaw: ColorRaw;
}

interface ColorRaw {
    hex: string;
}

interface Gallery {
    items: Item4[];
}

interface Item4 {
    sources: Source2[];
}

interface Source2 {
    url: string;
    width: number;
    height: number;
}

interface Profile {
    name: string;
    verified: boolean;
    pinnedItem?: any;
    biography: Biography;
    externalLinks: ExternalLinks;
    playlists: Playlists;
}

interface Playlists {
    totalCount: number;
    items: Item3[];
}

interface Item3 {
    uri: string;
    name: string;
    description: string;
    owner: Owner;
    images: Images;
}

interface Images {
    items: Item2[];
}

interface Item2 {
    sources: Source[];
}

interface Source {
    url: string;
    width?: any;
    height?: any;
}

interface Owner {
    name: string;
}

interface ExternalLinks {
    items: Item[];
}

interface Item {
    name: string;
    url: string;
}

interface Biography {
    text: string;
}

interface SharingInfo {
    shareUrl: string;
    shareId: string;
}