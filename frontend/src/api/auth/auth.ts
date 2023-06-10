import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api/";
//  api to call register a new user
export const signUp = async (data: any) => {
  return await axios.post(URL + "auth/register", data);
};
//  api to login user
export const signIn = async (data: any) => {
  return await axios.post(URL + "auth/login", data);
};

//api for fetch profile

export const getProfile = async (token: any) => {
  return await axios.get(URL + "user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

//api for logout

export const logout = async () => {
  return await axios.post(URL + "auth/logout");
};
