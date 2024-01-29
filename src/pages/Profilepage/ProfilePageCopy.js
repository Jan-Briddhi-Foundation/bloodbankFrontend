// import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import leftimage from "../../assets/thank you 1.png";
import rightimage from "../../assets/love.png";
import patienticon from "../../assets/patient.svg";
import { getProfileDetails } from "../../apis/Profile";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const redirect = useNavigate();
  const [details, setDetails] = useState();

  const profileDetailget = useCallback(async () => {
    const result = await getProfileDetails();
    if (result.detail === "Invalid token.") {
      toast.error("Season Expired");
      toast.error("Login again");
      localStorage.removeItem("bloodBankAuthToken");
      setTimeout(() => {
        redirect("/");
      });
    } else {
      setDetails(result);
    }
  }, [redirect]);

  useEffect(() => {
    profileDetailget();
  }, [profileDetailget]);

  return details ? (
    <>
      <Header />
      <div className="mt-[8vh] flex justify-center  ">
        <img
          className="absolute top-[10vh] md:top-[20vh] left-[3vw] w-[3rem] h-[3rem] md:w-auto md:h-auto "
          src={leftimage}
          alt="thankYouImage"
        />
        <main className="md:w-[32rem]  w-auto p-4  flex flex-col items-center border-2 border-[#BA595F]">
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="font-[Roboto] text-3xl font-bold">Your Profile</h1>
            <span className="font-[Roboto] font-normal text-center text-[rgba(107,_107,_107,_1)]">
              All about you!
            </span>
            <h1 className="font-[Roboto] text-[0.9rem] font-medium leading-[16px] tracking-[0.02em] text-center underline text-[rgba(186,_89,_95,_1)] cursor-pointer">
              Donate for the Cause
            </h1>
            <img
              className="w-[10vw] h-[8vw]"
              src={patienticon}
              alt="patienticon"
            />
          </div>
          <div className="mt-4 flex flex-col items-start gap-[1vh]">
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Name:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                {details.userForm.name}
              </span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Blood Group:<span>{details.profileForm.bloodGroup}</span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Address:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                {details.profileForm.address}
              </span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              City:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                {details.profileForm.city}
              </span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Country:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                {details.profileForm.country}
              </span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Phone Number:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                +91 {details.userForm.phone}
              </span>
            </h1>
            <h1 className="font-[Roboto] md:text-xl text-left text-black">
              Language:
              <span className="font-[Roboto] md:text-xl  text-[rgba(116,_125,_136,_1)]">
                {details.profileForm.langauge}
              </span>
            </h1>
          </div>
          <button
            className="border-[none] bg-[rgba(186,_89,_95,_1)] rounded-[5px] p-2 mt-8 mx-auto font-[Roboto]   text-center text-[rgba(255,_253,_253,_1)] cursor-pointer"
            onClick={() => {
              redirect("/editprofile");
            }}
          >
            EDIT PROFILE
          </button>
          <h1 className="mt-4 mb-4 font-[Roboto] text-[1.3rem] font-normal  text-center text-[rgba(186,_89,_95,_1)] underline cursor-pointer">
            Share Feedback
          </h1>
        </main>
        <img
          className="absolute right-5 bottom-10 w-[3rem] h-[3rem] md:w-auto md:h-auto md:right-[2vw] md:bottom-[.5vh]"
          src={rightimage}
          alt="thankYouImage"
        />
      </div>
    </>
  ) : (
    <>
      <Header />
      <center>
        <h1>
          <b>Loading...</b>
        </h1>
      </center>
    </>
  );
};

export default ProfilePage;
