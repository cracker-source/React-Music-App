import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { shazamCoreInstance } from "../utils/axios"



const getChartsByGenre = (genre: string): Promise<AxiosResponse<ShazamCoreTrack, AxiosRequestConfig>> => {
    return shazamCoreInstance.get('/charts/genre-world', {
        params: {
            genre_code: genre
        }
    })
}
const useChartsByGenre = (genre: string) => {
    return useQuery(["charts-by-genre", genre], () => getChartsByGenre(genre), {
        staleTime: Infinity,
        cacheTime: Infinity
    })
}

export default useChartsByGenre