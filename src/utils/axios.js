import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage'

const customFetch = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

customFetch.interceptors.request.use((config) => {
  const token = getUserFromLocalStorage()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    localStorage.clear('token')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
