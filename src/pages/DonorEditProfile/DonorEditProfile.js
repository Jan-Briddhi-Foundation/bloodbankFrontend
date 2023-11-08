import styles from "./DonorEditProfile.module.css";
import Header from "../../components/Header/Header";
import user from "../../assets/User.svg";
import Phone from "../../assets/Phone.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import blood from "../../assets/blood.svg";
import flag from "../../assets/Flag.svg";
import house from "../../assets/House.svg";

const DonorEditProfile = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.h1title}>Your Profile</h1>
          <span>All about you!</span>
          <h1 className={styles.highlighted}>Donate for the Cause</h1>
        </div>
        <section className={styles.form}>
          <div>
            <img src={user} alt="usericon" />
            <div className={styles.line}></div>
            <input type="text" name="name" placeholder="Patient Name" />
          </div>
          <div>
            <img src={blood} alt="bloodicon" />
            <div className={styles.line}></div>
            <div className={styles.customSelect}>
              <select name="bloodGroup">
                <option value="" selected>
                  Blood Group
                </option>
                <option value="A+">O+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div>
            <img src={house} alt="addressicon" />
            <div className={styles.line}></div>
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div>
            <img src={location} alt="locationicon" />
            <div className={styles.line}></div>
            <input type="text" name="city" placeholder="City*" />
          </div>
          <div>
            <img src={globe} alt="globeicon" />
            <div className={styles.line}></div>
            <input type="text" name="country" placeholder="Country*" />
          </div>
          <div>
            <img src={Phone} alt="phoneicon" />
            <div className={styles.line}></div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              maxLength="10"
            />
          </div>
          <div>
            <img src={flag} alt="flagicon" />
            <div className={styles.line}></div>
            <input type="text" name="language" placeholder="Language" />
          </div>
        </section>
        <button className={styles.button}>Save</button>
      </div>
    </>
  );
};

export default DonorEditProfile;
