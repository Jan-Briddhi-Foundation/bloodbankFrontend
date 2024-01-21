import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login, register } from "../../apis/Auth";
import phone from "../../assets/Phone.svg";
import userIcon from "../../assets/User.svg";
import email from "../../assets/email.svg";
import logo from "../../assets/logo.svg";
import password from "../../assets/password.svg";
import Header from "../../components/Header/Header";
import styles from "./Register1.module.css";

const Register1 = () => {
  const redirect = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const validateForm = (name, email, phone, password) => {
    let error;
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name) || name === "") {
      toast.error("Inavalid Name");
      error = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter valid email");
      error = true;
    }
    if (!/^(?!0)[0-9]{10}$/.test(phone) || phone === "") {
      toast.error("Enter Valid mobile number");
      error = true;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password should contain at least one uppercase, one lowercase, one number, and one special character"
      );
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
      user.name,
      user.email,
      user.phone,
      user.password
    );
    if (validate) {
      const result = await register(
        user.name,
        user.email,
        user.phone,
        user.password
      );
      if (result.email[0] === "user with this email already exists.") {
        toast.error(result.email[0]);
        toast.error("Redirecting to login page");
        setTimeout(() => {
          redirect("/");
        }, 2000);
      } else {
        const result = await login(user.email, user.password);
        const token = "Token " + result.token;
        localStorage.setItem("bloodBankAuthToken", JSON.stringify(token));
        toast.success("Registration Successfull");
        setTimeout(() => {
          redirect("/register2");
        }, 2000);
      }
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h4>Step 1 - Contact</h4>
        <img src={logo} alt="logo" className={styles.logo} />
        <section className={styles.form}>
          <div>
            <img src={userIcon} alt="usericon" />
            <div></div>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div>
            <img src={phone} alt="phoneicon" />
            <div></div>
            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="Mobile"
              value={user.phone}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
            />
          </div>
          <div>
            <img src={email} alt="emailicon" />
            <div></div>
            <input
              type="text"
              name="email"
              placeholder="E-mail*"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div>
            <img src={password} alt="passwordicon" />
            <div></div>
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
        </section>
        <button className={styles.button} onClick={handleSumbit}>
          NEXT
        </button>
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
      </main>
    </>
  );
};

export default Register1;
