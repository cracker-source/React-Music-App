import { Fragment, useRef } from "react"
import { Link } from "react-router-dom"
import ExploreCard from "../components/ExploreCard"
import { exploreData } from "../utils/explore-data"

const Homepage = () => {

    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <Fragment>
            <div className="bg-gradient-to-tr pt-52 pb-10 from-[#764ba2] to-[#005bea]">
                <div className="text-white text-center">
                    <p className="font-bold text-4xl md:text-5xl">Good Afternoon</p>
                    <div className="mt-5 md:flex justify-center items-center gap-2">
                        <p className="font-bold text-xl md:text-2xl text-gray-100">Enjoy The Free Music</p>
                        <div className="hidden md:block w-[7px] h-[7px] bg-gray-300 rounded-full" />
                        <p className="hidden md:block text-2xl font-bold text-gray-100">Everything but Music</p>
                    </div>
                    <div className="text-white mt-6">
                        <button onClick={() => ref?.current?.scrollIntoView({ behavior: "smooth" })} className="w-fit p-3 bg-gray-800">Explore Categories</button>
                    </div>
                </div>
            </div>
            <div className="px-12">
                <h2 className="mt-8 font-bold text-4xl text-center text-white">Explore</h2>
                <div className="mt-8 md:grid flex flex-col grid-cols-2 gap-7">
                    {exploreData.map((data) => {
                        return (
                            <ExploreCard key={data?.id} data={data} />
                        )
                    })}
                </div>
                <div ref={ref} className="mt-10 relative rounded-md flex items-center ">
                    <div className="relative w-full h-[300px]">
                        <img src="/world.jpg" alt="genre-home" className="rounded-md w-full h-[300px] object-cover" />
                    </div>
                    <div className="text-white w-full px-7 justify-center items-center flex flex-col gap-4 absolute bg-[rgba(0,0,0,0.6)] h-full">
                        <p className="text-2xl md:text-4xl text-center text-red-500 font-bold">Trending Music Videos</p>
                        <p className="text-sm md:text-lg text-center font-semibold italic">Music videos from all over the world</p>
                        <Link to='/explore/trending-music-videos' className="hover:bg-white hover:text-black transition-colors w-fit text-[12px] md:text-sm border border-white font-medium p-3 text-white rounded-2xl ">Click here to play</Link>
                    </div>
                </div>
                <div ref={ref} className="mt-10 relative rounded-md flex items-center ">
                    <div className="relative w-full h-[300px]">
                        <img src="/genre-home.jpg" alt="genre-home" className="rounded-md w-full h-[300px] object-cover" />
                    </div>
                    <div className="text-white w-full px-7 justify-center items-center flex flex-col gap-4 absolute bg-[rgba(0,0,0,0.6)] h-full">
                        <p className="text-2xl text-center md:text-4xl font-bold">Music From Your Favouriate Genre</p>
                        <p className="text-md md:text-lg text-center font-semibold italic">Rock, Pop, Country, Dance & many more</p>
                        <Link to='/genre/pop' className="hover:bg-white hover:text-black transition-colors w-fit border text-[12px] md:text-sm border-white font-medium p-3 text-white rounded-2xl ">Click here to play</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Homepage

