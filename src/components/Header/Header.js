import Account from "@mui/icons-material/AccountCircleOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Email from "@mui/icons-material/EmailOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import Notification from "@mui/icons-material/NotificationsNoneOutlined";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import Settings from "@mui/icons-material/SettingsOutlined";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/logo.svg";
import style from "./Header.module.css";
function Header() {
  const redirect = useNavigate();
  const [login, setLogin] = useState(
    false || localStorage.getItem("bloodBankAuthToken")
  );

  const handleClick = () => {
    login ? redirect("/profile") : redirect("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("bloodBankAuthToken");
    setLogin(false);
    toast.success("Logout Successfull");
    setTimeout(() => {
      redirect("/");
    });
  };

  const navRef = useRef()

  const show = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className={style.header}>
      <img
        src={Logo}
        className={style.Logo}
        alt="logo"
        onClick={() => {
          login ? redirect("/profile") : redirect("/");
        }}
      />
      <h1 className={style.compname}>Floating Blood Bank</h1>
      <nav className={style.icon} ref={navRef}>
          {login ? (
          <Settings
            className={style.icons}
            sx={{ fontSize: 42 }}
            onClick={() => {
              redirect("/editprofile");
            }}
          />
        ) : (
          ""
        )}
        {login ? <Email className={style.icons} sx={{ fontSize: 42 }} /> : ""}
        {login ? (
          <Logout
            className={style.icons}
            sx={{ fontSize: 42 }}
            onClick={handleLogout}
          />
        ) : (
          ""
        )}
        <Account
          className={style.icons}
          sx={{ fontSize: 42 }}
          onClick={handleClick}
        />
        {login ? (
          <Notification
            className={style.icons}
            sx={{ fontSize: 42 }}
            onClick={() => {
              redirect("/notifications");
            }}
          />
        ) : (
          ""
        )}
        <button className={style.nav_btn} onClick={show}><CloseOutlinedIcon /></button>
      </nav>
      <button className={style.nav_btn} onClick={show}><ReorderOutlinedIcon /></button>
    </div>
  );
}

export default Header;
