import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { spotifyInstance } from "../utils/axios"


const getSearchResults = (queryText: string): Promise<AxiosResponse<SpotifySearchResults, AxiosRequestConfig>> => {

    return spotifyInstance.get('/search/', {
        params: { q: queryText, type: 'multi', offset: '0', limit: '10', numberOfTopResults: '10' }
    })

}

const useSearchResults = (queryText: string) => {
    return useQuery(['search-results', queryText], () => getSearchResults(queryText), {
        staleTime: Infinity,
        cacheTime: Infinity,

    })
}

export default useSearchResults