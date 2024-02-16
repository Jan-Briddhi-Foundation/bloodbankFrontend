import Header from "../../components/Header/Header";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import blood from "../../assets/blood.svg";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register2 } from "../../apis/Auth";
import { CheckAuth } from "../../apis/LoggedInProfileType";

const Register2 = () => {
  (async () => await CheckAuth())();

  const formfield =
    "grid grid-cols-[auto,1fr] rounded overflow-hidden bg-[#f9f9f9] focus:outline";
  const inputformField =
    "bg-[#f9f9f9] p-2 text-3xl focus:outline-none max-[410px]:text-2xl max-[410px]:p-0";
  const iconStyle =
    "w-16 m-5 pr-2.5 border-r-[1px] border-black max-[410px]:w-12 ";

  const redirect = useNavigate();
  const [user, setUser] = useState({
    city: "",
    country: "",
    bloodGroup: "",
    type: "",
  });

  const validateForm = (city, country, bloodGroup, type) => {
    let error;
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(city) || city === "") {
      toast.error("Invalid City");
      error = true;
    }

    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(country) || country === "") {
      toast.error("Invalid Country");
      error = true;
    }

    if (!/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
      toast.error("Invalid Blood Group");
      error = true;
    }

    if (type === "") {
      toast.error("choose profile type");
      error = true;
    }

    if (error) {
      return false;
    }

    return true;
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const validate = validateForm(
      user.city,
      user.country,
      user.bloodGroup,
      user.type
    );
    if (validate) {
      const result = await register2(
        user.city,
        user.country,
        user.bloodGroup,
        user.type
      );

      if (result.details) {
        toast.error("Login required");
      } else {
        toast.success("Profile Created");
        if (user.type === "patient") {
          return redirect("/patient");
        }
        return setTimeout(() => {
          redirect("/donor");
        }, 2000);
      }
    }
  };

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center flex flex-col">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Step 2 - Details
            </h1>

            <img
              className="w-32 self-center my-6 max-[410px]:w-16 max-[410px]:my-3"
              src={logo}
              alt="logo"
            />
          </div>

          <form className="flex flex-col gap-y-4">
            <div className={formfield}>
              <img className={iconStyle} src={location} alt="location-icon" />

              <input
                className={inputformField}
                type="text"
                name="city"
                placeholder="City*"
                value={user.city}
                required
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
            </div>

            <div className={formfield}>
              <img className={iconStyle} src={globe} alt="globe-icon" />

              <input
                className={inputformField}
                type="text"
                name="country"
                placeholder="Country*"
                value={user.country}
                required
                onChange={(e) => setUser({ ...user, country: e.target.value })}
              />
            </div>

            <div className={formfield}>
              <img className={iconStyle} src={blood} alt="blood-icon" />

              <select
                className="block appearance-none w-full bg-[#f9f9f9] text-3xl text-gray-700 p-4 rounded leading-tight focus:outline-none"
                name="bloodGroup"
                placeholder="Blood Group"
                required
                value={user.bloodGroup}
                onChange={(e) =>
                  setUser({ ...user, bloodGroup: e.target.value })
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

            <div className="self-center mt-8 text-3xl max-[410px]:text-2xl">
              <label className="flex gap-4  mb-4">
                <input
                  type="radio"
                  name="blood"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUser({ ...user, type: "donor" });
                    }
                  }}
                />
                <p>I'm a blood donor.</p>
              </label>

              <label className="flex gap-4 ">
                <input
                  type="radio"
                  name="blood"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUser({ ...user, type: "patient" });
                    }
                  }}
                />
                <p>I need a blood donation.</p>
              </label>
            </div>

            <button
              className="mt-20 self-center rounded-md font-roboto text-center px-6 py-4 w-2/5 text-[1.8rem] text-[#f7f7f7] bg-[#ba595f] max-[410px]:mt-10 max-[410px]:w-3/5 max-[410px]:text-2xl"
              onClick={handleSumbit}
            >
              CREATE ACCOUNT
            </button>
          </form>
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
  );
};

export default Register2;
