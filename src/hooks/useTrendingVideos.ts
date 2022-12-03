import { AxiosRequestConfig, AxiosResponse } from "axios"
import { useQuery } from "react-query"
import { youtube } from "../utils/axios"


const getTrendingMusicVideos = (value: string): Promise<AxiosResponse<YoutubeVideo, AxiosRequestConfig>> => {
  return youtube.get('/trending', {
    params: {
      type: 'mu', hl: 'en', gl: value
    }
  })
}

const useTrendingVideos = (value: string) => {
  return useQuery(['trending-music-videos', value], () => getTrendingMusicVideos(value), {
    cacheTime: Infinity,
    staleTime: Infinity
  })
}

export default useTrendingVideos