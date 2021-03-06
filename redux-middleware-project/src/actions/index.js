import axios from 'axios';
import { API_KEY } from '../config/keys'; 

const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

export function fetchWeather(city) {
    const url = `${rootUrl}&q=${city},us`

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}