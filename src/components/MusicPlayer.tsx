import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { Fragment, useEffect, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"
import BackwardIcon from "../assets/icons/BackwardIcon"
import ForwardIcon from "../assets/icons/ForwardIcon"
import LoopIcon from "../assets/icons/LoopIcon"
import PauseIcon from "../assets/icons/PauseIcon"
import PlayIcon from "../assets/icons/PlayIcon"
import ShuffleIcon from "../assets/icons/ShuffleIcon"
import { nextSong, playPause, prevoiusSong, setShuffleRepeat } from "../store/reducers/musicPlayerReducer"
import { RootState, useStoreDispatch } from "../store/store"
import { PlayerOptions } from "../types/enums"

const MusicPlayer = () => {
    const { activeSong, isPlaying, playerOptions } = useSelector((state: RootState) => state.musicPlayer)

    const ref = useRef<HTMLAudioElement | null>(null)

    const mount = useRef(false)

    const dispatch = useStoreDispatch()

    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        if (mount.current && ref.current) {
            if (isPlaying) {
                ref?.current?.load();
                ref?.current?.play();
            } else {
                ref?.current?.pause();
            }
        }
        mount.current = true
    }, [isPlaying, activeSong])

    const handleNextSong = () => {
        dispatch(playPause(false)) // Pausing the current song and playing next song
        dispatch(nextSong())
    }
    const handlePreviousSong = () => {
        dispatch(playPause(false)) // Pausing the current song and playing previous song
        dispatch(prevoiusSong())
    }
    const pauseHandler = () => {
        dispatch(playPause(false))
    }
    const playHandler = () => {
        dispatch(playPause(true))
    }


    const formatTime = (time: number) => {
        const remainder = time % 3600;
        const minutes = Math.floor(remainder / 60);
        const seconds = Math.floor(remainder % 60);

        const mm = minutes.toString().padStart(2, '0');
        const ss = seconds.toString().padStart(2, '0');

        return `${mm}:${ss}`;
    }

    const onTimeUpdate = () => {
        const remainder = ref?.current?.duration ?? 60 % 3600 ?? 60
        const minutes = Math.floor(remainder / 60);
        const seconds = Math.floor(remainder % 60);
        const checkedMinutes = isNaN(minutes) ? '00' : minutes
        const checkedSeconds = isNaN(seconds) ? '00' : seconds
        const currentTime = ref?.current?.currentTime

        setTime(`${formatTime(currentTime ?? 0)} / ${checkedMinutes}:${checkedSeconds ?? '00'}`)

    }

    const playerOptionsHandler = (playerOption: number) => {
        dispatch(setShuffleRepeat(playerOption))
    }

    const sliderDragHandler = (value: number | number[]) => {
        if (ref.current && !Array.isArray(value)) {
            ref.current.currentTime = value
        }
    }

    const songDetails = useMemo(() =>
        <Fragment>
            <div className="flex items-center w-[27%] gap-3">
                <img src={activeSong?.image} className="rounded-md w-[60px] h-[60px] object-cover" alt={activeSong?.songName} />
                <div className="w-full">
                    <p className="text-white text-md font-bold truncate mb-2">{activeSong?.songName}</p>
                    <p className="text-gray-200 text-[12px] truncate font-normal">{activeSong?.artistName}</p>
                </div>
            </div>
        </Fragment>, [activeSong])

    // const onPauseCaptureTime = (event: SyntheticEvent<HTMLAudioElement>) => {
    //     console.log('Event: ', event?.currentTarget?.currentTime)
    //     if (ref?.current?.currentTime && event) {
    //         ref.current.currentTime = event?.currentTarget?.currentTime
    //     }
    // }

    return (
        <div className="flex justify-between z-30 items-center fixed px-6 bottom-0 h-[80px] w-full bg-gray-800">
            <div className="absolute z-0 top-[-8px] right-0 left-0">
                <Slider
                    max={ref?.current?.duration}
                    value={ref?.current?.currentTime}
                    handleStyle={{ backgroundColor: '#d4fc79', border: 'none' }}
                    trackStyle={{ backgroundColor: '#d4fc79' }}
                    draggableTrack={true}
                    onChange={sliderDragHandler}
                    className="h-[1px] m-0 w-full"
                />
            </div>
            {songDetails}
            <div className="flex-grow-[4]">
                <div className="z-10 md:w-[80%] flex gap-3 justify-end md:justify-center items-center md:gap-9">
                    <LoopIcon onClick={() => playerOptionsHandler(PlayerOptions.Repeat)} loop={playerOptions} />
                    <BackwardIcon onClick={handlePreviousSong} />
                    {isPlaying ? <PauseIcon onClick={pauseHandler} /> : <PlayIcon forMusicPlayer onClick={playHandler} />}
                    <ForwardIcon onClick={handleNextSong} />
                    <ShuffleIcon onClick={() => playerOptionsHandler(PlayerOptions.Shuffle)} shuffle={playerOptions} />
                </div>

            </div>
            <audio
                src={activeSong.uri}
                ref={ref}
                key={activeSong?.id}
                loop={playerOptions === PlayerOptions.Repeat}
                onEnded={handleNextSong}
                onTimeUpdate={onTimeUpdate}
                onLoadedData={() => dispatch(playPause(true))}
            />
            <div className="text-center hidden md:flex  items-center justify-evenly w-32">
                <p className="text-white  tracking-wide font-semibold">{time?.split('/')[0] ?? "00:00 / "}</p>
                <p className="text-white tracking-wide font-semibold">{` / ${time?.split('/')[1] ?? "00:00"} `}</p>
            </div>
        </div >
    )
}

export default MusicPlayer