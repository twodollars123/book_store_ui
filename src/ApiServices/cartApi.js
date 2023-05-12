import axios from "axios";

export const getCart = async (idUser) => {
  try {
    const res = await axios.get(`http://localhost:3001/cart/${idUser}`);
    return res.data;
  } catch (error) {
    console.log("loi get cart");
  }
};

export const addToCart = async (
  idUser,
  payload = { idItem: "", quantity: 1 }
) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/cart/${idUser}/addtocart`,
      payload
    );
    if (res) {
      return res.data;
    }
  } catch (error) {}
};

export const changeQuantity = async (idUser, payload) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/cart/${idUser}/changequantity`,
      payload
    );
    if (res) {
      return res.data;
    }
  } catch (error) {}
};
