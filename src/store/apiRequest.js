import axios from "axios";
import { toast } from "react-toastify";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import {
  getAllUsersFalure,
  getAllUsersStart,
  getAllUsersSuccess,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success("Login successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    if (res.data.isadmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  } catch (error) {
    dispatch(loginFailed());
    toast.error(`Error: wrong username or password`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(`http://localhost:3001/auth/singup`, user);
    dispatch(registerSuccess());
    toast.success("register successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/loggin");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (accessToken, dispatch) => {
  dispatch(getAllUsersStart());
  try {
    const res = await axios.get("http://localhost:3001/user/", {
      headers: { token: accessToken },
    });
    dispatch(getAllUsersSuccess(res.data));
  } catch (error) {
    dispatch(getAllUsersFalure());
  }
};

export const logoutUser = async (accessToken, dispatch, navigate, id) => {
  dispatch(loginStart());
  try {
    await axios.post(`http://localhost:3001/auth/logout/`, id, {
      headers: { token: accessToken },
    });
    dispatch(loginSuccess());
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};
