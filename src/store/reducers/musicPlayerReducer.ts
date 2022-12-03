import { createSlice } from "@reduxjs/toolkit";
import { PlayerOptions, TrackName } from "../../types/enums";
import { getRandomNumber } from "../../utils/utils";


const INITIAL_STATE: MusicPlayerReducerTypes = {
    isPlaying: false,
    isActive: false,
    activeSong: {
        uri: '',
        image: '',
        time: 0,
        artistName: '',
        songName: '',
        id: '',
        from: 0,
    },
    currentIndex: 0,
    spotifyTracks: [],
    shazamTracks: [],
    playerOptions: PlayerOptions.Normal

}

const musicPlayerReducer = createSlice({
    name: 'music',
    initialState: INITIAL_STATE,
    reducers: {
        setActiveSong: (state, action) => {
            state.isActive = true
            if (action.payload.track.layout) {
                const { track, id } = action.payload
                const { hub, title, subtitle, images, key } = track as ShazamCoreTrack
                state.activeSong.uri = hub?.actions ? hub?.actions[1]?.uri : ''
                state.activeSong.id = key
                state.activeSong.songName = title
                state.activeSong.artistName = subtitle
                state.activeSong.image = images?.coverarthq ?? ''
                state.currentIndex = id
                state.activeSong.from = TrackName.Shazam

            } else {
                const { preview_url, id, name, album, artists } = action.payload.track as Track
                state.activeSong.uri = preview_url
                state.activeSong.id = id
                state.activeSong.songName = name
                state.activeSong.artistName = artists[0]?.name
                state.activeSong.image = album?.images[0]?.url
                state.currentIndex = action.payload.id
                state.activeSong.from = TrackName.Spotify
            }

        },
        playPause: (state, action) => {
            state.isPlaying = action.payload
        },
        nextSong: (state) => {
            const shuffle = state.playerOptions === PlayerOptions.Shuffle
            if (state.activeSong.from === TrackName.Shazam) {
                let nextSongDetails;
                if (shuffle) {
                    const randomNumber = getRandomNumber(0, state.shazamTracks.length - 1)
                    nextSongDetails = state.shazamTracks[randomNumber]
                    state.currentIndex = randomNumber
                } else {
                    if (state.currentIndex < state.shazamTracks.length - 1) {
                        nextSongDetails = state.shazamTracks[state.currentIndex + 1]
                        state.currentIndex = state.currentIndex + 1
                    } else {
                        nextSongDetails = state.shazamTracks[0]
                        state.currentIndex = 0
                    }
                }

                state.activeSong.uri = nextSongDetails?.hub?.actions ? nextSongDetails?.hub?.actions[1]?.uri : ''
                state.activeSong.image = nextSongDetails?.images?.coverarthq ?? ''
                state.activeSong.artistName = nextSongDetails?.subtitle
                state.activeSong.id = nextSongDetails?.key
                state.activeSong.songName = nextSongDetails?.title
            } else {
                let nextSongDetails;
                if (shuffle) {
                    const randomNumber = getRandomNumber(0, state.spotifyTracks.length - 1)
                    nextSongDetails = state.spotifyTracks[randomNumber]
                    state.currentIndex = randomNumber
                } else {
                    if (state.currentIndex < state.spotifyTracks.length - 1) {
                        nextSongDetails = state.spotifyTracks[state.currentIndex + 1]
                        state.currentIndex = state.currentIndex + 1
                    } else {
                        nextSongDetails = state.spotifyTracks[0]
                        state.currentIndex = 0
                    }
                }

                state.activeSong.uri = nextSongDetails?.preview_url
                state.activeSong.image = nextSongDetails?.album?.images[0]?.url
                state.activeSong.artistName = nextSongDetails?.artists[0]?.name
                state.activeSong.id = nextSongDetails?.id
                state.activeSong.songName = nextSongDetails?.name
            }
        },
        prevoiusSong: (state) => {
            const shuffle = state.playerOptions === PlayerOptions.Shuffle
            if (state.activeSong.from === TrackName.Shazam) {
                let prevoiusSongDetails;
                if (shuffle) {
                    const randomNumber = getRandomNumber(0, state.shazamTracks.length - 1)
                    prevoiusSongDetails = state.shazamTracks[randomNumber]
                    state.currentIndex = randomNumber
                } else {
                    if (state.currentIndex === 0) {
                        prevoiusSongDetails = state.shazamTracks[state.shazamTracks.length - 1]
                        state.currentIndex = state.shazamTracks.length - 1
                    } else if (state.currentIndex <= state.shazamTracks.length - 1) {
                        prevoiusSongDetails = state.shazamTracks[state.currentIndex - 1]
                        state.currentIndex = state.currentIndex - 1
                    } else {
                        prevoiusSongDetails = state.shazamTracks[0]
                        state.currentIndex = 0
                    }

                }

                state.activeSong.uri = prevoiusSongDetails?.hub?.actions ? prevoiusSongDetails?.hub?.actions[1]?.uri : ''
                state.activeSong.image = prevoiusSongDetails?.images?.coverarthq ?? ''
                state.activeSong.artistName = prevoiusSongDetails?.subtitle
                state.activeSong.id = prevoiusSongDetails?.key
                state.activeSong.songName = prevoiusSongDetails?.title
            } else {
                let prevoiusSongDetails;
                if (shuffle) {
                    const randomNumber = getRandomNumber(0, state.spotifyTracks.length - 1)
                    prevoiusSongDetails = state.spotifyTracks[randomNumber]
                    state.currentIndex = randomNumber
                } else {

                    if (state.currentIndex === 0) {
                        prevoiusSongDetails = state.spotifyTracks[state.spotifyTracks.length - 1]
                        state.currentIndex = state.spotifyTracks.length - 1
                    } else if (state.currentIndex <= state.spotifyTracks.length - 1) {
                        prevoiusSongDetails = state.spotifyTracks[state.currentIndex - 1]
                        state.currentIndex = state.currentIndex - 1
                    } else {
                        prevoiusSongDetails = state.spotifyTracks[0]
                        state.currentIndex = 0
                    }
                }
                state.activeSong.uri = prevoiusSongDetails?.preview_url
                state.activeSong.image = prevoiusSongDetails?.album?.images[0]?.url
                state.activeSong.artistName = prevoiusSongDetails?.artists[0]?.name
                state.activeSong.id = prevoiusSongDetails?.id
                state.activeSong.songName = prevoiusSongDetails?.name
            }
        },
        setTracksData: (state, action) => {
            if (action.payload.type === TrackName.Shazam) {
                state.shazamTracks = action.payload.tracks
            } else {
                state.spotifyTracks = action.payload.tracks as Track[]
            }
        },
        setShuffleRepeat: (state, action) => {
            if (action.payload !== state.playerOptions) {
                state.playerOptions = action.payload
            } else {
                state.playerOptions = PlayerOptions.Normal
            }
        }
    }
})

export const { setActiveSong, playPause, nextSong, setTracksData, prevoiusSong, setShuffleRepeat } = musicPlayerReducer.actions;

export default musicPlayerReducer.reducer