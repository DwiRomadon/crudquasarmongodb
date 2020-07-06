import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5050/'
  // baseURL: 'http://ildis.setwan-dprd.lampungprov.go.id/'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
