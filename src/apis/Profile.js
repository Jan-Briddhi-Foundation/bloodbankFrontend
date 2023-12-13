import axios from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;

export const getProfileDetails = async () => {
  try {
    const requrl = `${backendURL}/api/profile/`;

    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.get(requrl, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};
