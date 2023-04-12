import axios from "axios";
import { toast } from "react-toastify";

export const getAllGenres = async () => {
  try {
    const res = await axios.get("http://localhost:3001/genre");
    return res.data;
  } catch (error) {
    console.log("get all genre", error);
  }
};

export const getAGenre = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/genre/:${id}`);
    return res.data;
  } catch (error) {
    console.log("get a genre", error);
  }
};

export const creareAGenre = async (payload, token) => {
  try {
    const res = await axios.post(`http://localhost:3001/genre/`, payload, {
      headers: { token: token },
    });

    toast.success("Create a new genre is successfull!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    return res.data;
  } catch (error) {
    console.log("error create a genre");
  }
};

export const updateAGenre = async (id, payload, accessToken) => {
  try {
    const res = await axios.put(`http://localhost:3001/genre/${id}`, payload, {
      headers: { token: accessToken },
    });
    return res.data;
  } catch (error) {
    console.log("update a genre", error);
  }
};

export const deleteAGenre = async (id, payload) => {
  try {
    await axios.delete(`http://localhost:3001/genre/${id}`, {
      headers: { token: payload.accessToken },
    });
  } catch (error) {
    console.log("delete a genre", error);
  }
};
