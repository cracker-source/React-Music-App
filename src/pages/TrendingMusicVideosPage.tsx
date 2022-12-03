import { Fragment, useMemo, useState } from 'react'
import useTrendingVideos from '../hooks/useTrendingVideos'
import YoutubeIcon from '../assets/icons/YoutubeIcon'
import VideoCard from '../components/VideoCard'
import Loader from '../components/Loader'
import Youtube from 'react-youtube'
import Modal from '../components/Modal'
import TickIcon from '../assets/icons/TickIcon'
import { useSearchParams } from 'react-router-dom'

const TrendingMusicVideos = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const globalValue = searchParams.get('global') === 'true' ? true : false

    const [videoId, setVideoId] = useState<string | null>(null)
    const [modal, setModal] = useState<boolean>(false)
    const [global, setGlobal] = useState<boolean>(globalValue)

    const { data, isLoading } = useTrendingVideos(globalValue ? 'US' : 'IN')

    const openModalHandler = (id: string) => {
        document.body.style.overflow = 'hidden'
        setModal(true)
        setVideoId(id)
    }

    const closeModalHandler = () => {
        document.body.style.overflowY = 'scroll'
        setModal(false)
        setVideoId(null)
    }

    const globalHandler = () => {
        setSearchParams({ global: global ? "false" : "true" }, { replace: true })
        setGlobal(prev => !prev)
    }

    const videosGrid = useMemo(() =>
        <div className='mt-8 grid md:grid-cols-4 gap-5 px-6'>
            {data?.data?.contents.map((video) => {
                return (
                    <VideoCard key={video?.video?.videoId} onClick={() => openModalHandler(video?.video?.videoId)} video={video} />
                )
            })}
        </div>, [data])

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };


    if (isLoading) return <Loader />

    return (
        <Fragment>
            <div className="flex flex-col md:flex-row items-center p-10 pt-36 md:pt-52 gap-9 bg-gradient-to-tr from-[#ff0844] to-[#ffb199]">
                <div className="bg-gray-800 rounded-md h-[180px] w-[180px] md:h-[220px] md:w-[220px]">
                    <YoutubeIcon />
                </div>
                <div className="text-white">
                    <p className="uppercase text-sm md:block hidden">Youtube Videos</p>
                    <p className="font-bold text-2xl text-center md:text-left md:text-5xl md:mt-2 capitalize">Trending Music Videos</p>
                    <p className="font-semibold mt-3 md:mt-5 text-md text-center md:text-left md:text-xl text-gray-200 capitalize">Your update of Today's Trending Music Videos</p>
                    <div className="mt-5 flex items-center md:justify-start justify-center gap-2">
                        <div onClick={globalHandler} className='relative border cursor-pointer w-10 h-[20px] border-white p-1 rounded-2xl'>
                            <span className={`${!global ? 'left-[4%]' : 'left-[52%]'} top-[1px] transition-all flex items-center justify-center inset-0 absolute h-4 w-4 rounded-full bg-white`}>
                                {global ? <TickIcon /> : null}
                            </span>
                        </div>
                        <p onClick={globalHandler} className='cursor-pointer text-lg font-semibold'>{global ? 'Global Enabled' : 'Enable Global'}</p>
                        <div className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                        <p className="text-md text-gray-200 font-semibold">{data?.data?.contents?.length} Videos</p>
                    </div>
                </div>
            </div>

            {videosGrid}
            {modal && <Modal onBackdropClose={closeModalHandler}><Youtube videoId={videoId ?? ''} opts={opts} /></Modal>}
        </Fragment>
    )
}

export default TrendingMusicVideos