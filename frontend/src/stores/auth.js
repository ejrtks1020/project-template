import { defineStore } from 'pinia'
import { ref, inject, computed } from 'vue'
import _ from 'lodash'

export const userAuthStore = defineStore('auth', () => {
    const api = inject('api')

    /*
    *
    * States.
    *
    */
    const authToken = ref(null);

    /*
    *
    * Getters.
    *
    */
    const getAuthToken = computed(() => {
        if (_.isEmpty(authToken.value)) {
            authToken.value = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
        }
        return authToken.value
    })

    /*
    *
    * Actions.
    *
    */
    const connect = async (params) => {
        const data = await api.auth.connect(params)
        if ((params.token === null) && !data.code) {
            storeAccessToken(data.data.token)
            console.log("init token received")
        }
        return data
    }

    const storeAccessToken = (token) => {
        authToken.value = token;
        localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY, token);
    }


    return {
        storeAccessToken,
        connect,
        getAuthToken,
    }

},
// {
//     persist: true
// }
)
