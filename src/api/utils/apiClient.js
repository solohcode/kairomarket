import { notification } from "antd";
import axios from "axios";
import store from 'store'
import { history } from "../..";


const apiClient =  axios.create({
    baseURL:  "http://142.93.152.229/cairo/api",
    // headers: {
    //     "Content-Type": 'application/json'
    // }
})


apiClient.interceptors.request.use( request =>{
    const userData = store.get('login-data')

    if(userData){
        request.headers.Authorization = `Bearer ${userData.token}`
        request.headers.AccessToken = userData
    }
    return request
})

apiClient.interceptors.response.use(undefined , err => {
    const { response } = err
  const { data } = response
    if(data && data.status_code === 401 && data.message === 'Token has expired'){
        notification.warning({
          message: `Oops ${data.message}`,
          description: 'Please re-login to continue request',
          style:{
            marginTop: '10vh'
          }
        })
        history.push('/auth/login')
        store.remove('login-data')
    }
})


export const nairaFormat = value => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(value)
  }

export default apiClient