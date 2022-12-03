import { Fragment } from "react"
import ArtistMediumCard from "../components/ArtistMediumCard"
import useTrendingArtists from "../hooks/useTrendingArtists"
import DownArrowIcon from "../assets/icons/DownArrowIcon"
import RaiseIndicatorIcon from "../assets/icons/RaiseIndicatorIcon"
import Loader from "../components/Loader"

const TopArtistsFullPage = () => {
    const { data, isLoading } = useTrendingArtists()

    if (isLoading) return <Loader />
    return (
        <Fragment>
            <div className="p-10 rounded-md flex items-center gap-8 bg-gradient-to-br from-[#0D324D] to-[#7F5A83]">
                <img className="rounded-md w-[300px] h-[300px]" src={data?.data?.artists[0]?.visuals?.avatar[0]?.url} alt={data?.data?.artists[0]?.name} />
                <div>
                    <p className="text-white uppercase mb-3">{data?.data?.type}</p>
                    <div className='text-white text-7xl font-bold'>{data?.data?.title.split(':')[0]}</div>
                    <p className="text-gray-300 text-2xl mt-5">{data?.data?.description.split('.')[0] + " globally."}</p>
                    <div className="flex items-center gap-2 mt-5">
                        <p className="text-gray-100 text-lg font-semibold uppercase">{data?.data?.artists[0]?.name}</p>
                        <div className="w-[7px] h-[7px] bg-gray-300 rounded-full" />
                        <p className="text-gray-100 uppercase font-semibold">This Week's Top Artist</p>
                    </div>
                    <p className="text-white mt-3 font-semibold uppercase">Previous Rank: {data?.data?.artists[0]?.chartData?.previousRank}</p>
                </div>
            </div>
            <hr className="mt-10 opacity-40" />
            <div className="px-6 mt-8 grid grid-cols-5 gap-4">
                {data && Object.values(data?.data?.artists).map((artist, index) => {
                    return (
                        <ArtistMediumCard
                            peakRank={artist?.chartData?.peakRank}
                            key={artist?.id}
                            artistImage={artist?.visuals?.avatar[0]?.url}
                            artistName={artist?.name}
                            artistRank={index}
                            artistType={artist?.type}
                            icon={artist?.chartData?.currentRank < artist?.chartData?.previousRank ? <DownArrowIcon /> : artist?.chartData?.currentRank > artist?.chartData?.previousRank ? <RaiseIndicatorIcon color='fill-green-500' /> : <RaiseIndicatorIcon color='fill-white' />}
                        />
                    )
                })}
            </div>
        </Fragment>
    )
}

export default TopArtistsFullPage