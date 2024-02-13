// import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import leftimage from "../../assets/thank you 1.png";
import rightimage from "../../assets/love.png";
import patienticon from "../../assets/patient.svg";
import { getProfileDetails } from "../../apis/Profile";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { CheckAuth } from "../../apis/LoggedInProfileType";

const ProfilePage = () => {
  (async () => {
    await CheckAuth();
  })();

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
      {/* <div className={styles.container}>
        <img src={leftimage} alt="thankYouImage" />
        <main className={styles.profileContainer}>
          <div className={styles.title}>
            <h1 className={styles.h1title}>Your Profile</h1>
            <span>All about you!</span>
            <h1 className={styles.highlighted}>Donate for the Cause</h1>
            <img src={patienticon} alt="patienticon" />
          </div>
          <div className={styles.profileDetails}>
            <h1>
              Name:<span>{details.userForm.name}</span>
            </h1>
            <h1>
              Blood Group:<span>{details.profileForm.bloodGroup}</span>
            </h1>
            <h1>
              Address:<span>{details.profileForm.address}</span>
            </h1>
            <h1>
              City:<span>{details.profileForm.city}</span>
            </h1>
            <h1>
              Country:<span>{details.profileForm.country}</span>
            </h1>
            <h1>
              Phone Number:<span>+91 {details.userForm.phone}</span>
            </h1>
            <h1>
              Language:<span>{details.profileForm.langauge}</span>
            </h1>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              redirect("/editprofile");
            }}
          >
            EDIT PROFILE
          </button>
          <h1 className={styles.feedback}>Share Feedback</h1>
        </main>
        <img src={rightimage} alt="thankYouImage" />
      </div> */}
      <div>
        <img src={leftimage} alt="thankYouImage" />
        <main>
          <div>
            <h1>Your Profile</h1>
            <span>All about you!</span>
            <h1>Donate for the Cause</h1>
            <img src={patienticon} alt="patienticon" />
          </div>
          <div>
            <h1>
              Name:<span>{details.userForm.name}</span>
            </h1>
            <h1>
              Blood Group:<span>{details.profileForm.bloodGroup}</span>
            </h1>
            <h1>
              Address:<span>{details.profileForm.address}</span>
            </h1>
            <h1>
              City:<span>{details.profileForm.city}</span>
            </h1>
            <h1>
              Country:<span>{details.profileForm.country}</span>
            </h1>
            <h1>
              Phone Number:<span>+91 {details.userForm.phone}</span>
            </h1>
            <h1>
              Language:<span>{details.profileForm.langauge}</span>
            </h1>
          </div>
          <button
            onClick={() => {
              redirect("/editprofile");
            }}
          >
            EDIT PROFILE
          </button>
          <h1>Share Feedback</h1>
        </main>
        <img src={rightimage} alt="thankYouImage" />
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
