import { Fragment, useEffect, useMemo, useRef } from "react"
import { useParams } from "react-router-dom"
import GenreFilterOptions from "../components/GenreFilterOptions"
import SongCard from "../components/SongCard"
import useChartsByGenre from "../hooks/useChartsByGenre"
import MusicTrackIcon from "../assets/icons/MusicTrackIcon"
import { setTracksData } from "../store/reducers/musicPlayerReducer"
import { useStoreDispatch } from "../store/store"
import { TrackName } from "../types/enums"
import Loader from "../components/Loader"

const GenrePage = () => {
    const params = useParams()
    const { data, isLoading } = useChartsByGenre(`${params.genre_id?.split('-').join('_').toUpperCase()}`)
    const musicByGenreData = useMemo(() => data && Object.values(data?.data) as ShazamCoreTrack[], [data])

    const mount = useRef<boolean>(false)

    const dispatch = useStoreDispatch()

    useEffect(() => {
        if (mount?.current) {
            dispatch(setTracksData({ tracks: musicByGenreData, type: TrackName.Shazam }))
        }
        mount.current = true
    }, [musicByGenreData, dispatch])

    if (isLoading) return <Loader />
    return (
        <Fragment>
            <div className="flex flex-col md:flex-row items-center p-10 pt-36 md:pt-48 gap-9 bg-gradient-to-tr from-[#667eea] to-[#764ba2]">
                <div className="bg-gray-800 rounded-md h-[220px] w-[220px]">
                    <MusicTrackIcon />
                </div>
                <div className="text-white">
                    <p className="uppercase hidden md:block text-sm">Music By Genre</p>
                    <p className="font-bold text-center md:text-left text-5xl md:mt-2 capitalize">{params.genre_id?.split('-').join(' ')}</p>
                    <p className="font-semibold text-md text-center block md:hidden md:text-left mt-5 md:text-xl text-gray-200 capitalize">Your update of the Global tracks by genre</p>
                    <p className="font-semibold text-lg text-center hidden md:block md:text-left mt-5 md:text-xl text-gray-200 capitalize">Your update of the tracks by genre - Global.</p>
                    <div className="mt-3 md:flex items-center gap-2">
                        <p className="text-md text-center md:text-left text-gray-200">{musicByGenreData?.length} Tracks</p>
                        <div className="hidden md:block w-[6px] h-[6px] bg-gray-300 rounded-full" />
                        <p className="hidden md:block text-md text-gray-200">{musicByGenreData && musicByGenreData[0].title} by {musicByGenreData && musicByGenreData[0].subtitle} is the top track</p>
                    </div>
                </div>
            </div>
            <div className="px-6">
                <GenreFilterOptions />
                <div className="mt-8 grid grid-cols-5 gap-5">
                    {musicByGenreData?.map((track, index) => {
                        return (
                            <SongCard
                                key={track?.key}
                                artistName={track?.subtitle}
                                explicit={track?.hub?.explicit}
                                id={index}
                                trackId={track?.key}
                                track={track}
                                trackImage={track?.images?.coverarthq ?? ''}
                                trackName={track?.title}

                            />
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default GenrePage