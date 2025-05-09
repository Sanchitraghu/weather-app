interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

export interface WeatherData {
  dt: number;
  main: MainWeatherData;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
  name: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherApiResponseData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherData[];
  city: CityInfo;
}

export interface IShowWeatherData {
  temperature: number;
  weatherType: string;
  iconId: string;
  windSpeed: number;
  timeStamp: string; // formatted 24-hour time, e.g., "14:00"
  currentDate: string;
}
