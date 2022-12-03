

interface ArtistMediumCardProps {
    artistImage: string,
    artistName: string,
    artistType: string,
    artistRank: number,
    icon: JSX.Element,
    peakRank: number
}

const ArtistMediumCard = ({ artistImage, artistName, artistType, artistRank, icon, peakRank }: ArtistMediumCardProps): JSX.Element => {
    return (
        <div className='bg-gray-800 group relative w-[270px] rounded-md p-4 cursor-pointer hover:bg-[#002F63]'>
            <div className="relative flex justify-center">
                <img className="w-[250px] rounded-md h-[250px] object-cover" src={artistImage} alt={artistName} />
                <div className="hidden absolute inset-0 group-hover:flex items-center rounded-md justify-center bg-gray-500 opacity-70">
                    <p className="text-white uppercase animate-slowfade font-semibold text-lg">View More</p>
                </div>
            </div>
            <div className="text-white pt-5">
                <p className="text-lg truncate font-semibold uppercase">{artistName}</p>
                <div className="flex mt-2 items-center gap-2">
                    <p className="text-md truncate font-semibold uppercase">{artistType}</p>
                    <div className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-2">
                        <p className="text-md truncate font-semibold uppercase">Rank: {artistRank + 1} </p>
                        {icon}
                        {/* {artist?.chartData?.currentRank < artist?.chartData?.previousRank ? <DownArrowIcon /> : artist?.chartData?.currentRank > artist?.chartData?.previousRank ? <RaiseIndicatorIcon color='fill-green-500' /> : <RaiseIndicatorIcon color='fill-white' />} */}
                    </div>
                </div>
                <p className="text-md mt-2 truncate font-semibold uppercase">Highest Rank: {peakRank}</p>

            </div>
        </div>
    )
}

export default ArtistMediumCard