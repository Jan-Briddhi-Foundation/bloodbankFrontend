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

const Register1 = () => {
  const formfield =
    "grid grid-cols-[auto,1fr] rounded overflow-hidden bg-[#f9f9f9] focus:outline";
  const inputformField =
    "bg-[#f9f9f9] p-2 text-3xl focus:outline-none max-[410px]:text-2xl max-[410px]:p-0";
  const iconStyle =
    "w-16 m-5 pr-2.5 border-r-[1px] border-black max-[410px]:w-12 ";

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
    if (!/^.{4,24}$/.test(password)) {
      toast.error("Password should between 4 and 24 characters");
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
      if (
        result?.email &&
        result.email[0] === "user with this email already exists."
      ) {
        toast.error(result.email[0]);
      } else {
        const result = await login(user.email, user.password);
        const token = "Token " + result.token;
        toast.success("Registration Successfull");
        localStorage.setItem("bloodBankAuthToken", JSON.stringify(token));
        setTimeout(() => {
          redirect("/register2");
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
              Step 1 - Contact
            </h1>

            <img
              className="w-32 self-center my-6 max-[410px]:w-16 max-[410px]:my-3"
              src={logo}
              alt="logo"
            />
          </div>

          <form className="flex flex-col gap-y-4">
            <div className={formfield}>
              <img className={iconStyle} src={userIcon} alt="usericon" />

              <input
                className={inputformField}
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            <div className={formfield}>
              <img className={iconStyle} src={phone} alt="phoneicon" />

              <input
                className={inputformField}
                type="text"
                name="phone"
                maxLength={10}
                placeholder="Mobile"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>

            <div className={formfield}>
              <img className={iconStyle} src={email} alt="email-icon" />

              <input
                className={inputformField}
                type="text"
                name="email"
                placeholder="Email*"
                value={user.email}
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className={formfield}>
              <img className={iconStyle} src={password} alt="password-icon" />

              <input
                className={inputformField}
                type="password"
                name="password"
                placeholder="Password*"
                value={user.password}
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              className="mt-20 self-center rounded-md font-roboto text-center px-6 py-4 w-2/5 text-[1.8rem] text-[#f7f7f7] bg-[#ba595f] max-[410px]:mt-10 max-[410px]:w-3/5"
              onClick={handleSumbit}
            >
              NEXT
            </button>
          </form>

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
        </div>
      </section>
    </>
  );
};

export default Register1;
