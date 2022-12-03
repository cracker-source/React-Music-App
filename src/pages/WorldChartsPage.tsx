import { Fragment, useEffect, useMemo, useRef } from 'react'
import SongCard from '../components/SongCard'
import useWorldCharts from '../hooks/useWorldCharts'
import MusicDiscIcon from '../assets/icons/MusicDiscIcon'
import { setTracksData } from '../store/reducers/musicPlayerReducer'
import { useStoreDispatch } from '../store/store'
import { TrackName } from '../types/enums'
import Loader from '../components/Loader'

const ChartsByCountryPage = () => {
    const { data, isLoading } = useWorldCharts()
    const worldChartsData = useMemo(() => data && Object.values(data?.data) as ShazamCoreTrack[], [data])

    const dispatch = useStoreDispatch()
    const mount = useRef<boolean>(false)


    useEffect(() => {
        if (mount?.current) {
            dispatch(setTracksData({ tracks: worldChartsData, type: TrackName.Shazam }))
        }
        mount.current = true
    }, [worldChartsData, dispatch])

    if (isLoading) return <Loader />

    return (
        <Fragment>
            <div className="flex flex-col md:flex-row items-center p-10 pt-32 md:pt-52 gap-9 bg-gradient-to-tr from-[#30cfd0] to-[#330867]">
                <div className="bg-gray-800 rounded-md w-full p-3 md:p-0 h-[200px] md:h-[220px] md:w-[220px]">
                    <MusicDiscIcon />
                </div>
                <div className="text-white">
                    <p className="uppercase hidden md:block">Charts</p>
                    <p className="font-bold text-center mt-1 md:text-left text-4xl md:text-5xl md:mt-2 capitalize">World Charts</p>
                    <p className="font-semibold mt-3 text-md text-center md:text-left md:mt-5 md:text-xl text-gray-200 capitalize">Your update of top tracks globally</p>
                    <div className="mt-3 md:flex md:items-center md:gap-2">
                        <p className="text-md text-gray-200 text-center md:text-left">{worldChartsData?.length} Tracks</p>
                        <div className="w-[7px] hidden md:block h-[7px] bg-gray-300 rounded-full" />
                        <p className="text-md text-gray-200 hidden md:block md:text-left">{worldChartsData && worldChartsData[0].title} by {worldChartsData && worldChartsData[0].subtitle} is the top track</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid px-6 grid-cols-5 gap-5">
                {worldChartsData?.map((track, index) => {
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
        </Fragment>
    )
}

export default ChartsByCountryPage