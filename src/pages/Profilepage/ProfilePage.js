import Header from "../../components/Header/Header";
import leftimage from "../../assets/thank you 1.png";
import rightimage from "../../assets/love.png";
import patienticon from "../../assets/patient.svg";
import { getProfileDetails } from "../../apis/Profile";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckAuth } from "../../apis/LoggedInProfileType";

const ProfilePage = () => {
  (async () => {
    await CheckAuth();
  })();

  const profileimgdiv = "w-44";
  const profileimg = "w-full";

  const profileDetailStyle =
    "text-3xl mb-2 text-[#111111] font-semibold text-roboto truncate max-[350px]:text-2xl";
  const profileDetailSpan = "ml-2 font-normal text-[#888888]";

  const redirect = useNavigate();
  const [details, setDetails] = useState();

  const profileDetailget = useCallback(async () => {
    const result = await getProfileDetails();
    setDetails(result);
  }, [redirect]);

  useEffect(() => {
    profileDetailget();
  }, [profileDetailget]);

  return details ? (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 grid grid-cols-[auto,1fr,auto] gap-x-2">
          <img
            className="self-start max-[790px]:invisible"
            src={leftimage}
            alt="thankYouImage"
          />
          <div className="flex flex-col">
            <div className="mb-8 text-center flex flex-col justify-center items-center">
              <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
                Your Profile
              </h1>
              <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
                All about you!
              </p>
              <p className="text-[#ba595f] text-xl max-[410px]:text-base mb-14 underline underline-offset-2 font-semibold uppercase">
                Donate for the Cause
              </p>

              <div className={profileimgdiv}>
                <img
                  className={profileimg}
                  src={patienticon}
                  alt="patienticon"
                />
              </div>
            </div>
            <div className="self-center">
              <p className={profileDetailStyle}>
                Name:
                <span className={profileDetailSpan}>
                  {details.userForm.name}
                </span>
              </p>
              <p className={profileDetailStyle}>
                Blood Group:
                <span className={profileDetailSpan}>
                  {details.profileForm.bloodGroup}
                </span>
              </p>
              <p className={profileDetailStyle}>
                Address:
                <span className={profileDetailSpan}>
                  {details.profileForm.address}
                </span>
              </p>
              <p className={profileDetailStyle}>
                City:
                <span className={profileDetailSpan}>
                  {details.profileForm.city}
                </span>
              </p>
              <p className={profileDetailStyle}>
                Country:
                <span className={profileDetailSpan}>
                  {details.profileForm.country}
                </span>
              </p>
              <p className={profileDetailStyle}>
                Phone Number:
                <span className={profileDetailSpan}>
                  +91 {details.userForm.phone}
                </span>
              </p>
              <p className={profileDetailStyle}>
                Language:
                <span className={profileDetailSpan}>
                  {details.profileForm.langauge}
                </span>
              </p>
            </div>
            <button
              className="my-20 self-center rounded-md font-roboto text-center px-6 py-4 w-3/5 text-[1.8rem] text-[#f7f7f7] bg-[#ba595f] max-[350px]:text-[1rem]"
              onClick={() => {
                redirect("/editprofile");
              }}
            >
              EDIT PROFILE
            </button>
            <p className="self-center text-[#ba595f] underline underline-offset-2 mb-14 text-2xl max-[410px]:text-base  font-normal">
              Share Feedback
            </p>
          </div>
          <img
            className="self-end max-[790px]:invisible"
            src={rightimage}
            alt="thankYouImage"
          />
        </div>
      </section>
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
