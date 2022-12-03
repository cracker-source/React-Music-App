import { Link } from "react-router-dom"
import RightArrowIcon from "../assets/icons/RightArrowIcon"

interface ExploreCardProps {
    data: ExploreData
}

const ExploreCard = ({ data }: ExploreCardProps): JSX.Element => {
    return (
        <Link key={data?.id} to={data.link} className='w-[100%]'>
            <div key={data.id} className='relative rounded-md group'>
                <img src={data.image} alt={data.name} className='w-full h-[300px] rounded-md object-cover' />
                <div className="absolute inset-0 flex rounded-md items-end pb-4 pl-5 bg-[rgba(0,0,0,0.3)]">
                    <div className="flex items-center w-full justify-between pr-5">
                        <div className="w-full">
                            <p className="text-white text-2xl font-semibold md:text-4xl mt-3 truncate">{data.name}</p>
                            <p className="text-white font-semibold md:text-sm italic mt-3">{data.subtitle}</p>
                        </div>
                        <div className="hidden group-hover:block animate-pulse">
                            <RightArrowIcon />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ExploreCard