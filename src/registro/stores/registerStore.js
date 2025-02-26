import {defineStore} from 'pinia';
import {ref} from "vue";

export const useRegisterStore = defineStore(
    'registerStore',() => {
        const name = ref('');
        const email = ref('');
        const password = ref('');

        const saveRegister = (formname, formmail, formpass) => {
            name.value = formname;
            email.value = formmail;
            password.value = formpass;
        }
        return {name, email, password, saveRegister};
    });