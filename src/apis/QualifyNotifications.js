import axios from "axios";
const backendURL = "https://bloodbak.onrender.com";

export const qualifyDonor = async (data) => {
  try {
    const requrl = `${backendURL}/api/donation-criteria/`;
    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));

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
