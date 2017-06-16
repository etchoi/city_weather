import axios from 'axios';

const API_KEY = '17ce9e1d0047d4ab1fb235a08eae4349';

export const FETCH_WEATHER = 'FETCH_WEATHER';
// ES6 Template String
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
