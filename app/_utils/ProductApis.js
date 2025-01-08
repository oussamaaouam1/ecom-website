const { default: axiosClient } = require("./axiosClient");



const getLatestProducts = () => axiosClient.get('/Products?populate=*')


export default {
  getLatestProducts
}