import { PlayerOptions } from "../../types/enums"


interface LoopIconProps {
    loop: number
    onClick: () => void
}

const LoopIcon = ({ loop, onClick }: LoopIconProps) => {
    return (
        <svg onClick={onClick} className='h-4 w-4 md:w-5 md:h-5 cursor-pointer' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="media-player" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                <g id="loop" fill={`${loop === PlayerOptions.Repeat ? 'white' : 'gray'}`}>
                    <path d="M6.8762659,15.1237341 C7.93014755,16.8486822 9.83062143,18 12,18 C14.6124377,18 16.8349158,16.3303847 17.6585886,14 L19.747965,14 C18.8598794,17.4504544 15.7276789,20 12,20 C9.28005374,20 6.87714422,18.6426044 5.43172915,16.5682708 L3,19 L3,13 L9,13 L6.8762659,15.1237341 Z M17.1245693,8.87543068 C16.0703077,7.15094618 14.1695981,6 12,6 C9.3868762,6 7.16381436,7.66961525 6.33992521,10 L4.25,10 C5.13831884,6.54954557 8.27134208,4 12,4 C14.7202162,4 17.123416,5.35695218 18.5692874,7.43071264 L21,5 L21,11 L15,11 L17.1245693,8.87543068 Z" id="Shape"></path>
                </g>
            </g>
        </svg>
    )
}

export default LoopIcon