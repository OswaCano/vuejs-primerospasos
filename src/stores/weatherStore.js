import {defineStore} from "pinia";
import {ref} from "vue";

export const useWeatherStore = defineStore(
    "weatherStore", () => {
    const temperature = ref(0);
    const setTemperatura = (tmp) => {
        temperature.value = tmp;
    };
    return {temperature, setTemperatura};
})