import axios from "axios";

export const search = async (q, limit = "less", type = "books") => {
  try {
    const res = axios.get(`http://localhost:3001/search`, {
      params: {
        q: q,
        limit,
        type,
      },
    });
    if (res) {
      return res;
    } else {
      return "not found";
    }
  } catch (error) {
    console.log("lỗi search");
  }
};
