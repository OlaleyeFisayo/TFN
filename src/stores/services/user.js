import { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import toast from 'src/helpers/toast'
import axiosInstance from '../axiosConfig'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    success: false,
    message: null,
    error: null,
  }),
  actions: {
    async getUserDetails() {
      try {
        this.loading = true
        this.false = false
        const { data } = await axiosInstance.get('/user/me')
        this.success = true
        this.user = data
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
        if(error.status === 403) {
          console.log(error)
        } else {
          toast.error(this.error)
        }
        throw Error(this.error || 'Network Error')
      }
    },
  },
})
