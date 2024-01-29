import Header from "../../components/Header/Header";
import styles from "./Register2.module.css";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import blood from "../../assets/blood.svg";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register2 } from "../../apis/Auth";
const Register2 = () => {
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
          redirect("/donate");
        }, 2000);
      }
    }
  };
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-4 py-8">
        <h4>Step 2 - Details</h4>
        <img className="w-[5rem] h-[5rem]" src={logo} alt="logo" />
        <section className={styles.form}>
          <div className="flex items-center">
            <img src={location} alt="locationicon" className={styles.img} />
            <div className={styles.line}></div>
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={user.city}
              onChange={(e) => {
                setUser({ ...user, city: e.target.value });
              }}
            />
          </div>
          <div>
            <img src={globe} alt="globeicon" className={styles.img} />
            <div className={styles.line}></div>
            <input
              type="text"
              name="country"
              placeholder="Country*"
              value={user.country}
              onChange={(e) => {
                setUser({ ...user, country: e.target.value });
              }}
            />
          </div>
          <div className="mb-4">
            <img src={blood} alt="bloodicon" className={styles.img} />
            <div className={styles.line}></div>
            <div className={styles.customSelect}>
              <select
                name="bloodGroup"
                value={user.bloodGroup}
                onChange={(e) => {
                  setUser({ ...user, bloodGroup: e.target.value });
                }}
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
          <section className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="blood"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUser({ ...user, type: "donor" });
                    }
                  }}
                />
                <span>I'm a blood donor.</span>
              </label>
            </div>
            <div>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="blood"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUser({ ...user, type: "patient" });
                    }
                  }}
                />
                <span>I need a blood donation.</span>
              </label>
            </div>
          </section>
        </section>
        <button className={styles.button} onClick={handleSumbit}>
          CREATE ACCOUNT
        </button>
      </main>
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
