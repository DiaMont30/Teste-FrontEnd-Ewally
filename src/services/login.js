import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToAccount } from '../router/coordinator'

export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body).then((res) => {
      localStorage.setItem("token", res.data.token)
      goToAccount(history)
    }).catch(err => {
      window.alert(err.response.data.msg)
    })
  }