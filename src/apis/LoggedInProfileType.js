import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getProfileDetails } from "../apis/Profile";

export const CheckAuthAndProfile = async () => {
  const redirect = useNavigate();

  try {
    const authToken = localStorage.getItem("bloodBankAuthToken");
    const result = await getProfileDetails();
    const profileType = result?.profileForm?.profile_type;
    console.log(authToken);

    if (!authToken) {
      toast.error("Please Login");

      setTimeout(() => {
        redirect("/login");
        return;
      }, 1000);
    }

    if (result.detail === "Invalid token.") {
      toast.error("Session Expired");
      toast.error("Login again");
      localStorage.removeItem("bloodBankAuthToken");

      setTimeout(() => {
        redirect("/login");
      }, 1000);
    }

    if (profileType !== "donor" && profileType !== "patient") {
      setTimeout(() => {
        redirect("/register2");
        return;
      });
    }

    return profileType;
  } catch (error) {
    console.error("Error checking authentication:", error);
    if (error) {
      return error.data;
    }
    // return false;
  }
};
