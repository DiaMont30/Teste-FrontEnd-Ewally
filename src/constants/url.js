import axios from 'axios'

export const BASE_URL = "https://apidev.ewally.com.br"

export const axiosInstance = axios.create({
    baseURL: "https://apidev.ewally.com.br",
    headers: {
      'Content-Type': 'application/json',
    },
  })

