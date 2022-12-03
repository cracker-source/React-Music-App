import axios from "axios";

export const spotifyScrapperInstance = axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_SCRAPPER,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SPOTIFY_SCRAPPER_HOST
    }
})

export const spotifyInstance = axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_23,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SPOTIFY_23_HOST
    }
})

export const shazamCoreInstance = axios.create({
    baseURL: process.env.REACT_APP_SHAZAM_CORE,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SHAZAM_CORE_HOST
    }
})

export const youtube = axios.create({
    baseURL: process.env.REACT_APP_YOUTUBE_SEARCH_DOWNLOAD,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_SEARCH_DOWNLOAD_HOST
    }
})

export const spotify81Instance = axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_81,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_SPOTIFY_81_HOST
    }
})

