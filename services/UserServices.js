import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3004`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMe() {
    return apiClient.get('/mac')
  },
  getUsers() {
    return apiClient.get('/user')
  },
  getUser(id) {
    return apiClient.get('/user/' + id)
  },
  setUser(name) {
    return apiClient.post('/user/', { username: name })
  }
}
