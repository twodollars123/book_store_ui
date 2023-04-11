import axios from "axios";

export const getAllUsers = async (accessToken) => {
  try {
    const res = await axios.get("http://localhost:3001/user/", {
      headers: { token: accessToken },
    });
    if (res) {
      return res.data;
    } else {
      console.log("get all users failure because res is exist");
    }
  } catch (error) {}
};
