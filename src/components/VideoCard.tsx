import VideoCardIcon from "../assets/icons/VideoCardIcon"
import VideoPlayIcon from "../assets/icons/VideoPlayIcon"

interface VideoCardProps {
    video: Content,
    onClick: () => void,
    image?: string
}

const VideoCard = ({ video, onClick, image }: VideoCardProps) => {
    return (
        <div onClick={onClick} className='bg-gray-800 group p-3 relative rounded-md cursor-pointer animate-slowopacity h-full'>
            <div className='relative'>
                <img src={image ? image : video?.video?.thumbnails[2]?.url} alt={video?.video?.title} className='w-full rounded-md object-cover' />
                <div className='bg-black text-white text-center w-fit h-fit absolute bottom-0 right-0 p-1 font-medium text-xs rounded-tl-md'>{video?.video?.lengthText}</div>
                <div className='absolute bg-red-200 hidden opacity-70 animate-slowopacity rounded-md inset-0 group-hover:block' />
                <div className='absolute inset-0 hidden group-hover:flex animate-slowopacity items-center justify-center'>
                    <VideoPlayIcon />
                </div>
            </div>
            <div className='text-white mt-3'>
                <p className='line-clamp-1 font-semibold text-sm'>{video?.video?.title}</p>
                <div className='flex items-center gap-2 my-2'>
                    <VideoCardIcon />
                    <p className='text-gray-200 truncate text-[12px]'>{video?.video?.channelName}</p>
                </div>
                <div className='flex items-center gap-2 text-[12px] mt-3'>
                    <p className='truncate '>{video?.video?.viewCountText}</p>
                    <div className="w-[4px] h-[4px] bg-gray-300 rounded-full" />
                    <p className='truncate'>{video?.video?.publishedTimeText}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard