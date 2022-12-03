import { useDispatch, useSelector } from 'react-redux'
import ExplicitIcon from '../assets/icons/ExplicitIcon'
import PauseIcon from '../assets/icons/PauseIcon'
import PlayIcon from '../assets/icons/PlayIcon'
import { setActiveSong, playPause } from '../store/reducers/musicPlayerReducer'
import { RootState } from '../store/store'


interface SongCardProps {
    trackId: string,
    trackImage: string,
    artistName: string,
    trackName: string,
    explicit: boolean,
    track: Track | ShazamCoreTrack,
    id: number
}

const SongCard = ({ trackId, trackImage, artistName, trackName, explicit, track, id }: SongCardProps): JSX.Element => {
    const { activeSong, isPlaying } = useSelector((state: RootState) => state.musicPlayer)

    const dispatch = useDispatch()
    const playHandler = () => {
        dispatch(setActiveSong({ track, id }))
        dispatch(playPause(true))
    }

    const pauseHandler = (e?: Event) => {
        e?.stopPropagation()
        dispatch(playPause(false))
    }

    return (
        <div key={trackId} onClick={playHandler} className="rounded-md overflow-hidden flex gap-3 md:gap-0 md:block cursor-pointer hover:bg-[#002F63] relative bg-gray-800  md:p-3">
            <div className="relative group">
                <img src={trackImage} alt={trackName} className='md:rounded-md w-full h-20 md:h-[200px] object-cover' />
                <div className={`${isPlaying && activeSong.id === trackId ? 'flex' : 'hidden'} bg-gray-500 opacity-70 absolute inset-0 group-hover:flex justify-center animate-slowopacity rounded-md items-center`}>
                    {(isPlaying && activeSong.id === trackId) ? <div><PauseIcon onClick={pauseHandler} /></div> : <div><PlayIcon onClick={playHandler} /></div>}
                </div>
            </div>
            <div className="text-white pt-3 w-[60%] md:w-full">
                <p className="text-md truncate font-semibold ">{trackName}</p>
                <div className='md:flex md:mt-1 items-center justify-between'>
                    <p className="text-sm truncate font-normal md:font-semibold">{artistName}</p>
                    {explicit && <div className='md:pl-3'><ExplicitIcon /></div>}
                </div>
            </div>
        </div>
    )
}

export default SongCard