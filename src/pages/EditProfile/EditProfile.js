import styles from "./EditProfile.module.css";
import Header from "../../components/Header/Header";
import user from "../../assets/User.svg";
import Phone from "../../assets/Phone.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import blood from "../../assets/blood.svg";
import flag from "../../assets/Flag.svg";
import house from "../../assets/House.svg";
import { ToastContainer, toast } from "react-toastify";
import { getProfileDetails, EditProfileDetails } from "../../apis/Profile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckAuth } from "../../apis/LoggedInProfileType";

const EditProfile = () => {
  (async () => {
    const result = await CheckAuth();
  })();

  const redirect = useNavigate();
  const [details, setDetails] = useState(null);

  const profileDetailget = async () => {
    const result = await getProfileDetails();
    setDetails(result);
  };

  useEffect(() => {
    profileDetailget();
  }, []);

  const handleInputChange = (e, formType, fieldName) => {
    const value = e.target.value;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [formType]: {
        ...prevDetails[formType],
        [fieldName]: value,
      },
    }));
  };

  const HandleEditProfile = async () => {
    const result = await EditProfileDetails(
      details.userForm.name,
      details.userForm.email,
      details.userForm.phone,
      details.profileForm.bloodGroup,
      details.profileForm.langauge,
      details.profileForm.country,
      details.profileForm.city,
      details.profileForm.address
    );
    if (result) {
      toast.success(result.message);
      setTimeout(() => {
        redirect("/profile");
      }, 2000);
    } else {
      toast.error("Internal Server Error");
    }
  };

  return details ? (
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={details.userForm.name}
              onChange={(e) => handleInputChange(e, "userForm", "name")}
            />
          </div>
          <div>
            <img src={blood} alt="bloodicon" />
            <div className={styles.line}></div>
            <div className={styles.customSelect}>
              <select
                name="bloodGroup"
                value={details.profileForm.bloodGroup}
                onChange={(e) =>
                  handleInputChange(e, "profileForm", "bloodGroup")
                }
              >
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
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={details.profileForm.address}
              onChange={(e) => handleInputChange(e, "profileForm", "address")}
            />
          </div>
          <div>
            <img src={location} alt="locationicon" />
            <div className={styles.line}></div>
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={details.profileForm.city}
              onChange={(e) => handleInputChange(e, "profileForm", "city")}
            />
          </div>
          <div>
            <img src={globe} alt="globeicon" />
            <div className={styles.line}></div>
            <input
              type="text"
              name="country"
              placeholder="Country*"
              value={details.profileForm.country}
              onChange={(e) => handleInputChange(e, "profileForm", "country")}
            />
          </div>
          <div>
            <img src={Phone} alt="phoneicon" />
            <div className={styles.line}></div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              maxLength="10"
              value={details.userForm.phone}
              onChange={(e) => handleInputChange(e, "userForm", "phone")}
            />
          </div>
          <div>
            <img src={flag} alt="flagicon" />
            <div className={styles.line}></div>
            <input
              type="text"
              name="langauge"
              placeholder="Language"
              value={details.profileForm.langauge}
              onChange={(e) => handleInputChange(e, "profileForm", "langauge")}
            />
          </div>
        </section>
        <button className={styles.button} onClick={HandleEditProfile}>
          Save
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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

export default EditProfile;
