import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=20.6668&longitude=-103.3918&hourly=temperature_2m&timezone=auto';

export const getTemperature = async () => {
    const url = `${API_URL}/temperature`;
    const response = await axios.get(url);
    const newTemperature = response.data.hourly.temperature_2m[0];
    return newTemperature;
};