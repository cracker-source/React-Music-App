import { AxiosResponse, AxiosRequestConfig } from "axios"
import { useQuery } from "react-query"
import { youtube } from "../utils/axios"

const getYoutubeSearchResult = (value: string): Promise<AxiosResponse<YoutubeVideo, AxiosRequestConfig>> => {
    return youtube.get('/search', {
        params: { query: value, hl: 'en', gl: 'US', type: 'v', duration: 's', sort: 'v' }
    })
}

const useYoutubeSearchResult = (queryText: string) => {
    return useQuery(['youtube-search-result', queryText], () => getYoutubeSearchResult(queryText))
}

export default useYoutubeSearchResult