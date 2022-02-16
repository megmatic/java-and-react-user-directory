import axios from 'axios'
const USERS_API_BASE_URL = "http://localhost:8080/api/users"

class UserService {
  getUsers() {
    return axios.get(USERS_API_BASE_URL)
  }

  getUserById(userId) {
      return axios.get(`${USERS_API_BASE_URL}/${userId}`)
  }

  createUser(user) {
    return axios.post(USERS_API_BASE_URL, user)
  }

  updateUser(user, userId) {
    return axios.put(`${USERS_API_BASE_URL}/${userId}`, user)
  }

  deleteUser(userId) {
    return axios.delete(`${USERS_API_BASE_URL}/${userId}`)
  }
}

export default new UserService()
