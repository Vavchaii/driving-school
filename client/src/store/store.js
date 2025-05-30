import { observer } from 'mobx-react-lite'
import AuthService from '../services/AuthService'
import axios from 'axios'
import { API_URL } from '../http'

export default class Store {
  user = {}
  isAuth = false

  constructor() {
    observer(this)
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(error.response?.data?.message)
    }
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(error.response?.data?.message)
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({})
    } catch (error) {
      console.log(error.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      })
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (error) {
      console.log(error.response?.data?.message)
    }
  }
}
