import { API_CONFIG } from "./config";
import type { WeatherData, IForecastData, GeocodingResponse, Coordinates } from "./interfaces";

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

    const url = this.createUrl(`${API_CONFIG.DATA_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: "metric",
    });

    return this.fetchData<WeatherData>(url);
  }

  async getForecast({ lat, lon }: Coordinates): Promise<IForecastData> {
    console.log(`Fetching forecast for lat: ${lat}, lon: ${lon}`);

    const url = this.createUrl(`${API_CONFIG.DATA_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: "metric",
    });

    return this.fetchData<IForecastData>(url);
  }

  async reverseGeocode({ lat, lon }: Coordinates): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO_URL}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: "1",
    });

    return this.fetchData<GeocodingResponse[]>(url);
  }

  async searchLocations(q: string): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO_URL}/direct`, { q, limit: "5" });

    return this.fetchData<GeocodingResponse[]>(url);
  }
}

export const weatherAPI = new WeatherAPI();
