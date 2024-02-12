// import styles from "./EditProfile.module.css";
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

  const formfield =
    "grid grid-cols-[auto,1fr] rounded overflow-hidden bg-[#f9f9f9] focus:outline";
  const inputformField =
    "text-xl bg-[#f9f9f9] p-2 text-base focus:outline-none";
  const iconStyle = "w-10 m-2 pr-2 border-r-[1px] border-black";

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
      {/* <div className={styles.container}>
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

      </div>  */}
      <div className="px-8 py-8">
        <div className="mx-auto my-8 text-center max-w-3xl">
          <div className="flex flex-col items-center gap-y-3 mb-2">
            <h1 className="text-4xl font-bold">Your Profile</h1>
            <p className="text-[#6b6b6b] mb-2 ">All about you!</p>
            <h1 className="text-[#ba595f] text-sm mb-8 underline underline-offset-2 font-semibold uppercase">
              Donate for the Cause
            </h1>
          </div>
          <section className="flex flex-col gap-y-3">
            <div className={formfield}>
              <img className={iconStyle} src={user} alt="usericon" />

              <input
                className={inputformField}
                type="text"
                name="name"
                placeholder="Full Name"
                value={details.userForm.name}
                onChange={(e) => handleInputChange(e, "userForm", "name")}
              />
            </div>
            <div className={formfield}>
              <img className={iconStyle} src={blood} alt="bloodicon" />

              <div>
                <select
                  className="block appearance-none w-full bg-[#f9f9f9] text-gray-700 p-2 rounded leading-tight focus:outline-none"
                  name="bloodGroup"
                  placeholder="Blood Group"
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
            <div className={formfield}>
              <img className={iconStyle} src={house} alt="addressicon" />

              <input
                className={inputformField}
                type="text"
                name="address"
                placeholder="Address"
                value={details.profileForm.address}
                onChange={(e) => handleInputChange(e, "profileForm", "address")}
              />
            </div>
            <div className={formfield}>
              <img className={iconStyle} src={location} alt="locationicon" />

              <input
                className={inputformField}
                type="text"
                name="city"
                placeholder="City*"
                value={details.profileForm.city}
                onChange={(e) => handleInputChange(e, "profileForm", "city")}
              />
            </div>
            <div className={formfield}>
              <img className={iconStyle} src={globe} alt="globeicon" />

              <input
                className={inputformField}
                type="text"
                name="country"
                placeholder="Country*"
                value={details.profileForm.country}
                onChange={(e) => handleInputChange(e, "profileForm", "country")}
              />
            </div>
            <div className={formfield}>
              <img className={iconStyle} src={Phone} alt="phoneicon" />

              <input
                className={inputformField}
                type="text"
                name="phone"
                placeholder="Phone Number*"
                maxLength="10"
                value={details.userForm.phone}
                onChange={(e) => handleInputChange(e, "userForm", "phone")}
              />
            </div>
            <div className={formfield}>
              <img className={iconStyle} src={flag} alt="flagicon" />

              <input
                className={inputformField}
                type="text"
                name="langauge"
                placeholder="Language"
                value={details.profileForm.langauge}
                onChange={(e) =>
                  handleInputChange(e, "profileForm", "langauge")
                }
              />
            </div>
          </section>
          <button
            className="mt-24 rounded-md font-roboto text-center px-6 py-2 w-46 text-[1.2rem] text-[#f7f7f7] bg-[#ba595f]"
            onClick={HandleEditProfile}
          >
            Save
          </button>
        </div>
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
