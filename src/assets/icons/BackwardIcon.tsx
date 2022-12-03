
interface BackwardIconProps {
    onClick: () => void
}

const BackwardIcon = ({ onClick }: BackwardIconProps) => {
    return (
        <svg onClick={onClick} className='fill-white w-5 h-5 md:w-6 md:h-6 cursor-pointer' viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path fill="white" d="M14 15v-14l-10 7z"></path>
            <path fill="white" d="M2 1h2v14h-2v-14z"></path>
        </svg>
    )
}

export default BackwardIcon