
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { shazamCoreInstance } from '../utils/axios'

const getChartsByCountry = (): Promise<AxiosResponse<ShazamCoreTrack, AxiosRequestConfig>> => {
    return shazamCoreInstance.get('/charts/world')
}

const useChartsByCountry = () => {
    return useQuery('chart-by-country', getChartsByCountry, {
        cacheTime: Infinity,
        staleTime: Infinity
    })
}

export default useChartsByCountry