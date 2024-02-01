import axios from "axios";
const backendURL = "https://bloodbak.onrender.com";

export const requestHistory = async () => {
  try {
    const requrl = `${backendURL}/api/patient-history/`;
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
