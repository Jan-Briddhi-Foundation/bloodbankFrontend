import axios from "axios";
const backendURL =  "https://bloodbak.onrender.com";

export const requestHistory = async (data) => {
  try {
    const requrl = `${backendURL}/api/patient-history/`;
    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    console.log(token);
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.post(requrl, data, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};