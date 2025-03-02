import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=20.6668&longitude=-103.3918&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperature = async () => {
    const response = await axios.get(API_URL);
    const newTemperature = response.data.current.temperature_2m;
    return newTemperature;
};