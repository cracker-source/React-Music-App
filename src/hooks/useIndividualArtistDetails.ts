import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { spotify81Instance } from "../utils/axios"

const getIndividualArtist = (artistId: string): Promise<AxiosResponse<IndividualArtist, AxiosRequestConfig>> => {
    return spotify81Instance.get('/artist_overview', {
        params: {
            id: artistId
        }
    })
}

const useIndividualArtistDetails = (artistId: string) => {
    return useQuery(['individual-artist', artistId], () => getIndividualArtist(artistId), {
        staleTime: Infinity,
        cacheTime: Infinity
    })
}

export default useIndividualArtistDetails