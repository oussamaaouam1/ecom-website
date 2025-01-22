const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);
const cartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=images&?filters[email][$eq]=${email}`
  );

export default {
  addToCart,
  cartItems,
};
