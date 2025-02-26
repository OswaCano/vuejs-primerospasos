import {useWeatherStore} from '@/stores/weatherStore.js';
import {getTemperature} from "@/helpers/getWeather.js";

export const useWeather = async () => {
    const temperature = await getTemperature();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperature;
}
