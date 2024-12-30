import { defineStore } from 'pinia'
import axiosInstance from '../axiosConfig'
import toast from 'src/helpers/toast'
import { AxiosError } from 'axios'

export const useAuthStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    success: false,
    message: null,
    error: null,
    access: null,
  }),
  actions: {
    async signUp(payload) {
      try {
        this.loading = true
        this.false = false
        const { data } = await axiosInstance.post('/auth/signup', payload)
        const { message } = data
        this.success = true
        this.message = message
        toast.success(this.message)
        this.loading = false
      } catch (error) {
        this.loading = false
        this.success = false
        if (error instanceof AxiosError) {
          const requestError = error?.response?.data
          this.error = requestError?.message
        } else {
          this.error = error?.message || error
        }
        toast.error(this.error)
        throw Error(this.error || 'Network Error')
      }
    },
    async login(payload) {
      try {
        this.loading = true
        this.false = false
        const { data } = await axiosInstance.post('/auth/login', payload)
        const { message, token } = data
        this.success = true
        this.message = message
        this.setAccessToken(token)
        this.loading = false
        toast.success(this.message)
      } catch (error) {
        this.loading = false
        this.success = false
        if (error instanceof AxiosError) {
          const requestError = error?.response?.data
          this.error =
            typeof requestError?.error == 'string' ? requestError?.error : requestError?.message
        } else {
          this.error = error?.message || error
        }
        toast.error(this.error)
        throw Error(this.error || 'Network Error')
      }
    },
    setAccessToken(token) {
      this.clearAccessToken()
      this.access = token
      this.setToken('access', token)
    },
    clearAccessToken() {
      this.access = null
      this.clearToken('access')
    },

    setResetToken(token) {
      this.clearResetToken()
      this.reset = token
      this.setToken('reset', token)
    },

    clearResetToken() {
      this.reset = null
      this.clearToken('reset')
    },

    setToken(key, token) {
      localStorage.setItem(key, JSON.stringify(token))
    },

    clearToken(key) {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
      }
    },
  },
  getters: {
    getAuthToken(state) {
      const storageToken = localStorage.getItem('access')
      return storageToken || state.access
    },
  },
})
