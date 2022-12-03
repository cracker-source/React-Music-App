import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { spotifyInstance } from "../utils/axios"

const getTrackDetails = (totalTrackIds: string): Promise<AxiosResponse<SpotifyTracksResponse, AxiosRequestConfig>> => {
    return spotifyInstance.get('/tracks/', {
        params: {
            ids: totalTrackIds
        }
    })
}

const useTrackFullDetails = (totalTrackIds: string) => {
    return useQuery(['track-full-details', totalTrackIds], () => getTrackDetails(totalTrackIds), {
        staleTime: Infinity,
        cacheTime: Infinity
    })
}

export default useTrackFullDetails