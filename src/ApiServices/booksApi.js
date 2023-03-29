import axios from "axios";

export const getABook = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/book/:${id}`);
    return res.data;
  } catch (error) {
    console.log("get a book falure", error);
  }
};

export const getAllBooks = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/book`);
    return res.data;
  } catch (error) {
    console.log("get a book falure", error);
  }
};

export const createABook = async (payload) => {
  try {
    await axios.post(`http://localhost:3001/book`, payload);
  } catch (error) {
    console.log("create a book falure", error);
  }
};

export const updateABook = async (payload) => {
  try {
    await axios.put(`http://localhost:3001/book/:${payload._id}`, payload, {
      headers: { token: payload.accessToken },
    });
  } catch (error) {
    console.log("update a book falure", error);
  }
};
export const deleteABook = async (payload) => {
  try {
    await axios.delete(`http://localhost:3001/book/:${payload._id}`, payload, {
      headers: { token: payload.accessToken },
    });
  } catch (error) {
    console.log("delete a book falure", error);
  }
};