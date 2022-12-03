import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { spotifyScrapperInstance } from "../utils/axios"


const fetchTrendingArtists = (): Promise<AxiosResponse<TrendingArtistsSpotifyScrapper, AxiosRequestConfig>> => {
    return spotifyScrapperInstance.get('/chart/artists/top')
}

const useTrendingArtists = () => {
    return useQuery('trending-artists', fetchTrendingArtists, {
        staleTime: Infinity,
        cacheTime: Infinity
    })

}

export default useTrendingArtists