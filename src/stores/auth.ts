import router from "@/router";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import axios from "@/services/axios";

export const useAuthStore = defineStore('auth', () =>{
    const tokenFromLocalStorage = localStorage.getItem('token') || ''
    
    const user = reactive<any>({})

    const token = ref(tokenFromLocalStorage)

    const isAuth = computed(() => token.value !== '')

    const login = async (form: any) =>{
        const res = await axios.post('admin-login', form)
        const tokenData = res.data.accessToken
        token.value = tokenData
        localStorage.setItem('token', token.value)
        router.push('/')
    }

    const logOut = async() =>{
        localStorage.clear()
        setTimeout(() =>{
            router.push({ path: '/login' })
            window.location.reload()
        }, 200)

    }
    return {
        token,
        isAuth,
        user,
        login,
        logOut
    }


})