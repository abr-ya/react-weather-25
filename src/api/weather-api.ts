import { API_CONFIG } from "./config";
import type { WeatherData, ForecastData, GeocodingResponse, Coordinates } from "./interfaces";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });

    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Weather API Error: ${response.statusText}`);

    return response.json();
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    console.log(`Fetching current weather for lat: ${lat}, lon: ${lon}`);

    return {} as WeatherData;
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    console.log(`Fetching forecast for lat: ${lat}, lon: ${lon}`);

    return { list: [], city: { name: "", country: "", sunrise: 0, sunset: 0 } };
  }

  async reverseGeocode(): Promise<GeocodingResponse[]> {
    return [];
  }
}

export const weatherAPI = new WeatherAPI();
