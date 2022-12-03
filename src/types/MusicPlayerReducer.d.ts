
interface MusicPlayerReducerTypes {
    isPlaying: boolean,
    isActive: boolean,
    activeSong: ActiveSong,
    currentIndex: number,
    spotifyTracks: Track[]
    shazamTracks: ShazamCoreTrack[]
    playerOptions: number
}

interface ActiveSong {
    uri?: string,
    image: string,
    time: number,
    artistName: string,
    songName: string,
    id: string,
    from: TrackName
}

