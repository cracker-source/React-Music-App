import { Fragment, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchIcon from '../assets/icons/SearchIcon'
import SearchLoading from '../assets/icons/SearchLoading'
import AlbumResult from '../components/SearchPage/AlbumResult'
import ArtistResult from '../components/SearchPage/ArtistResult'
import TrackResult from '../components/SearchPage/TracksResult'
import VideoResults from '../components/SearchPage/VideoResults'
import useDebounceSearch from '../hooks/useDebounceSearch'
import useSearchResults from '../hooks/useSearchResults'
import useYoutubeSearchResult from '../hooks/useYoutubeSearchResult'

const SearchPage = () => {

    const [params] = useSearchParams()

    const [searchValue, setSearchValue] = useState<string>(params.get('search') ?? '')

    const debounceValue = useDebounceSearch(searchValue, 600)

    const { data, isLoading } = useSearchResults(debounceValue)
    const { data: youtubeResult, isLoading: youtubeResultLoading } = useYoutubeSearchResult(debounceValue)

    return (
        <Fragment>
            <section className="bg-gradient-to-tr pt-36 md:pt-56 pb-10 from-[#2575fc] to-[#6a11cb]">
                <div className="text-white relative text-center w-full">
                    <div className='flex px-3 items-center w-[80%] md:w-[50%] justify-center m-auto border border-white rounded-md'>
                        <input
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            placeholder='Search here....'
                            type="text" name="" id=""
                            className='relative bg-transparent w-[100%] h-16 px-3 font-semibold text-xl placeholder:text-gray-200 focus:outline-none '
                        />
                        <div className=''>
                            {(isLoading || youtubeResultLoading) ? <SearchLoading /> : <SearchIcon />}
                        </div>
                    </div>
                    <p className='mt-5 text-md md:text-xl text-gray-100 font-semibold'>Showing Search Results For</p>
                    <p className='text-xl md:text-2xl font-bold mt-5'>{`"${debounceValue}"`}</p>
                    {/* <div className="mt-5 flex justify-center items-center gap-2">
                    <p className="font-bold text-3xl text-gray-100">Enjoy The Free Music</p>
                    <div className="w-[7px] h-[7px] bg-gray-300 rounded-full" />
                    <p className="text-3xl font-bold text-gray-100">Everything but Music</p>
                </div> */}
                    {/* <div className="text-white mt-6">
                    <button className="w-fit p-5 bg-gray-800">Explore Categories</button>
                </div> */}
                </div>
            </section>

            {(!isLoading && !youtubeResultLoading) &&
                <div className='text-white mt-6 px-6'>
                    <ArtistResult topResultsData={data?.data?.artists} />
                    <VideoResults data={youtubeResult?.data?.contents} />
                    <AlbumResult data={data?.data?.albums} />
                    <TrackResult data={data?.data?.tracks} />
                </div>}
        </Fragment>
    )
}

export default SearchPage