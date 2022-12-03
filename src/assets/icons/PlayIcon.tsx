

interface PlayIconProps {
    onClick?: () => void,
    forMusicPlayer?: boolean
}
const PlayIcon = ({ onClick, forMusicPlayer }: PlayIconProps) => {
    return (
        <svg onClick={onClick} className="w-8 md:w-12 cursor-pointer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" xmlSpace="preserve">
            <ellipse className={`${forMusicPlayer ? 'fill-transparent' : 'fill-[#1A1718]'} `} cx="256" cy="256" rx="256" ry="255.832" />
            <polygon className={`${forMusicPlayer ? 'fill-white' : 'fill-gray-400'} `} points="173.328,403.248 416.976,256 173.328,108.752 " />
            <polygon className={`${forMusicPlayer ? 'fill-white' : 'fill-gray-400'} `} points="173.328,256 416.976,256 173.328,108.752 " />
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    )
}

export default PlayIcon