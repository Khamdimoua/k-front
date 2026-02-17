import axios from "axios";
// import { storeToRefs } from 'pinia'
import { useAuthStore } from "@/stores/auth";
import { apiURL } from "@/global-variables";


axios.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    config.headers.Authorization = authStore.token;
    config.headers.Accept = "application/json";
    return config;
});

axios.defaults.baseURL = apiURL;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            const authStore = useAuthStore()

            authStore.logOut()
        }
        return Promise.reject(error);
    }
);

export default axios;