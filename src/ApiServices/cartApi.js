import axios from "axios";

export const getCart = async () => {
  try {
    const res = await axios.get("http://localhost:3001/cart");
    return res.data;
  } catch (error) {
    console.log("loi get cart");
  }
};
