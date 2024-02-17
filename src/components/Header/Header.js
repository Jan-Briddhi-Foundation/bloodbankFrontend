import Account from "@mui/icons-material/AccountCircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Email from "@mui/icons-material/EmailOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import Notification from "@mui/icons-material/NotificationsNoneOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/logo.svg";
// import style from "./Header.module.css";

function Header() {
  const redirect = useNavigate();
  const [login, setLogin] = useState(
    false || localStorage.getItem("bloodBankAuthToken")
  );

  const handleLogout = () => {
    localStorage.removeItem("bloodBankAuthToken");
    setLogin(false);
    toast.success("Logout Successfull");
    setTimeout(() => {
      redirect("/login");
    });
  };

  const navRef = useRef();

  const show = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="flex items-center justify-between border-b-4 border-[#ba595f] px-6 py-2">
      <img
        src={Logo}
        className="w-16"
        alt="logo"
        onClick={() => {
          login ? redirect("/patient") : redirect("/login");
        }}
      />
      <h1 className="text-4xl max-[650px]:hidden font-semibold capitalize text-[#ba595f]">
        Floating Blood Bank
      </h1>
      <nav className="flex items-center gap-6 max-[650px]:gap-3" ref={navRef}>
        {login ? (
          <Settings
            className="text-[#ba595f]"
            sx={{ fontSize: 38 }}
            onClick={() => {
              redirect("/editprofile");
            }}
          />
        ) : (
          ""
        )}
        {login ? (
          <Email className="text-[#ba595f]" sx={{ fontSize: 38 }} />
        ) : (
          ""
        )}
        {login ? (
          <Logout
            className="text-[#ba595f]"
            sx={{ fontSize: 38 }}
            onClick={handleLogout}
          />
        ) : (
          ""
        )}

        {login ? (
          <Account
            className="text-[#ba595f]"
            sx={{ fontSize: 38 }}
            onClick={() => {
              redirect("/profile");
            }}
          />
        ) : (
          ""
        )}

        {login ? (
          <Notification
            className="text-[#ba595f]"
            sx={{ fontSize: 38 }}
            onClick={() => {
              redirect("/notifications");
            }}
          />
        ) : (
          ""
        )}
        {/* <button className="" onClick={show}>
          <CloseOutlinedIcon />
        </button> */}
      </nav>
      {/* <button className="" onClick={show}>
        <ReorderOutlinedIcon />
      </button> */}
    </header>
  );
}

export default Header;
