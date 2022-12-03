import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MusicTrackIcon from '../assets/icons/MusicTrackIcon'
import TickIcon from '../assets/icons/TickIcon'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import useTopTracks from '../hooks/useTopTracks'
import useTrackFullDetails from '../hooks/useTrackFullDetails'
import { setTracksData } from '../store/reducers/musicPlayerReducer'
import { useStoreDispatch } from '../store/store'
import { TrackName } from '../types/enums'

const Top50Page = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const globalValue = searchParams.get('global') === 'true' ? true : false

    const { data, isLoading } = useTopTracks(globalValue ? 'GLOBAL' : 'IN')
    const tracksId = useMemo(() => data && Object.values(data?.data) as TopTracks[], [data,])

    const trackIdArray = useMemo(() => tracksId?.map((track) => track?.trackMetadata?.trackUri.split(":")[2]).slice(0, 50).join(','), [tracksId])

    const { data: fullTrackDetailsData, isLoading: fullTracksLoading } = useTrackFullDetails(trackIdArray ?? "")
    const fullTracks = useMemo(() => Object.values(fullTrackDetailsData!.data?.tracks), [fullTrackDetailsData])

    const dispatch = useStoreDispatch()

    const mount = useRef<boolean>(false)

    const [global, setGlobal] = useState<boolean>(globalValue)

    const globalHandler = () => {
        setSearchParams({ global: global ? "false" : "true" }, { replace: true })
        setGlobal(prev => !prev)
    }

    useEffect(() => {
        if (mount?.current && !isLoading && !fullTracksLoading) {
            dispatch(setTracksData({ tracks: fullTracks, type: TrackName.Spotify }))
        }
        mount.current = true
    }, [fullTracks, dispatch, fullTracksLoading, isLoading])

    if (isLoading || fullTracksLoading) return <Loader />

    return (
        <Fragment>
            <div className="flex items-center p-10 pt-52 gap-9 bg-gradient-to-tr from-[#cc208e] to-[#6713d2]">
                <div className="bg-gray-800 rounded-md h-[220px] w-[220px]">
                    <MusicTrackIcon topCharts />
                </div>
                <div className="text-white">
                    <p className="uppercase text-[12px]">Charts</p>
                    <p className="font-bold text-5xl mt-2 capitalize">Top 50 - {globalValue ? 'Global' : 'India'}</p>
                    <p className="font-semibold mt-5 text-xl text-gray-200 capitalize">Your update of daily top tracks</p>
                    <div className="mt-3 flex items-center gap-2">

                        <p className="text-md text-gray-200">{fullTracks?.length} Tracks</p>
                        <div className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                        <p className="text-md text-gray-200">{fullTracks && fullTracks[0]?.name} by {fullTracks && fullTracks[0]?.artists[0]?.name} is the top track</p>
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                        <div onClick={globalHandler} className='relative border cursor-pointer w-10 h-[20px] border-white p-1 rounded-2xl'>
                            <span className={`${!global ? 'left-[4%]' : 'left-[54%]'} top-[1px] transition-all flex items-center justify-center inset-0 absolute h-4 w-4 rounded-full bg-white`}>
                                {global ? <TickIcon /> : null}
                            </span>
                        </div>
                        <p onClick={globalHandler} className='cursor-pointer text-md font-semibold'>{global ? 'Global Enabled' : 'Enable Global'}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid px-6 grid-cols-5 gap-5">
                {fullTracks?.map((track: Track, index) => {
                    return (
                        <SongCard
                            key={track?.id}
                            artistName={track?.artists[0]?.name}
                            explicit={track?.explicit}
                            id={index}
                            trackId={track?.id}
                            track={track}
                            trackImage={track?.album?.images[0]?.url}
                            trackName={track?.name}
                        />
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Top50Page