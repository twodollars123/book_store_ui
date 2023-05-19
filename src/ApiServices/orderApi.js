import axios from "axios";

export const createNewOrder = async (payload) => {
  try {
    const res = await axios.post(`http://localhost:3001/order`, payload);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("sai", console.error);
  }
};
