import React from "react";
import Logo from "../../assets/logo.svg";
import Email from "@mui/icons-material/EmailOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import Account from "@mui/icons-material/AccountCircleOutlined";
import Notification from "@mui/icons-material/NotificationsNoneOutlined";
import style from "./Header.module.css";
import Settings from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

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
      <div className={style.icon}>
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
      </div>
    </div>
  );
}

export default Header;
