import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import leftimage from "../../assets/thank you 1.png";
import rightimage from "../../assets/love.png";
import patienticon from "../../assets/patient.svg";
import { getProfileDetails } from "../../apis/Profile";
import { useEffect, useState } from "react";
const ProfilePage = () => {
  const get = async () => {
    const result = await getProfileDetails();
    console.log(result);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
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
              Name:<span>Sanjeet Kumar</span>
            </h1>
            <h1>
              Blood Group:<span>O+</span>
            </h1>
            <h1>
              Address:<span>Delhi,India</span>
            </h1>
            <h1>
              City:<span>Delhi</span>
            </h1>
            <h1>
              Country:<span>India</span>
            </h1>
            <h1>
              Phone Number:<span>+91 8709682741</span>
            </h1>
            <h1>
              Language:<span>English,Hindi</span>
            </h1>
          </div>
          <button className={styles.button}>EDIT PROFILE</button>
          <h1 className={styles.feedback}>Share Feedback</h1>
        </main>
        <img src={rightimage} alt="thankYouImage" />
      </div>
    </>
  );
};

export default ProfilePage;
