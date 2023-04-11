import axios from "axios";

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

export const updateAGenre = async (id, payload, accessToken) => {
  try {
    await axios.put(`http://localhost:3001/genre/${id}`, payload, {
      headers: { token: accessToken },
    });
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
