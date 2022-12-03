import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { spotify81Instance } from "../utils/axios"


const fetchTopTracks = (country: string): Promise<AxiosResponse<TopTracks, AxiosRequestConfig>> => {
    return spotify81Instance.get('/top_200_tracks', {
        params: {
            country: country
        }
    })
}

const useTopTracks = (country: string) => {
    return useQuery(['weekly-top-tracks', country], () => fetchTopTracks(country), {
        staleTime: Infinity,
        cacheTime: Infinity
    })
}

export default useTopTracks