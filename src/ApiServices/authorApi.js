import axios from "axios";

export const createAAuthor = async (payload) => {
  try {
    await axios.post(`http://localhost:3001/author`, payload);
  } catch (error) {
    console.log("create a author err", error);
  }
};

export const getAAuthor = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/author/:${id}`, id);
    return res.data;
  } catch (error) {
    console.log("get a author err", error);
  }
};

export const getAllAuthor = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/author`);
    return res.data;
  } catch (error) {
    console.log("get all author err", error);
  }
};

export const updateAAuthor = async (payload) => {
  try {
    await axios.put(`http://localhost:3001/author/:${payload._id}`, payload, {
      headers: { token: payload.accessToken },
    });
  } catch (error) {
    console.log("update a author err", error);
  }
};

export const deleteAAuthor = async (payload) => {
  try {
    await axios.delete(`http://localhost:3001/author/:${payload.id}`, {
      headers: { token: payload.accessToken },
    });
  } catch (error) {
    console.log("delete a author err", error);
  }
};
