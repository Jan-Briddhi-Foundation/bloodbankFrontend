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
    await CheckAuth();
  })();

  const formfield =
    "grid grid-cols-[auto,1fr] rounded overflow-hidden bg-[#f9f9f9] focus:outline";
  const inputformField =
    "bg-[#f9f9f9] p-2 text-3xl focus:outline-none max-[410px]:text-2xl max-[410px]:p-0";
  const iconStyle =
    "w-16 m-5 pr-2.5 border-r-[1px] border-black max-[410px]:w-12 ";

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

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Your Profile
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              All about you!
            </p>
            <p className="text-[#ba595f] text-xl max-[410px]:text-base mb-6 underline underline-offset-2 font-semibold uppercase">
              Donate for the Cause
            </p>
          </div>
          <section className="flex flex-col gap-y-4">
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

              <select
                className="block appearance-none w-full bg-[#f9f9f9] text-3xl text-gray-700 p-4 rounded leading-tight focus:outline-none"
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
            className="mt-40 self-center rounded-md font-roboto text-center px-6 py-4 w-2/5 text-[1.8rem] text-[#f7f7f7] bg-[#ba595f] max-[410px]:mt-20 max-[410px]:w-3/5"
            // self-center text-[#ba595f] underline underline-offset-2 mb-14 text-2xl max-[410px]:text-base  font-normal
            onClick={HandleEditProfile}
          >
            Save
          </button>
        </div>
      </section>
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
          <b className="text-3xl">Loading...</b>
        </h1>
      </center>
    </>
  );
};

export default EditProfile;
