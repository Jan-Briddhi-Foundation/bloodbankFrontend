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

function Header() {
  const redirect = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("bloodBankAuthToken");
    if (token) redirect("/profile");
    else {
      redirect("/");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("bloodBankAuthToken");
    toast.success("Logout Successfull");
    setTimeout(() => {
      redirect("/");
    });
  };

  return (
    <div className={style.header}>
      <img src={Logo} className={style.Logo} alt="logo" onClick={handleClick} />
      <h1 className={style.compname}>Floating Blood Bank</h1>
      <div className={style.icon}>
        <Settings className={style.icons} sx={{ fontSize: 42 }} />
        <Email className={style.icons} sx={{ fontSize: 42 }} />
        <Logout
          className={style.icons}
          sx={{ fontSize: 42 }}
          onClick={handleLogout}
        />
        <Account
          className={style.icons}
          sx={{ fontSize: 42 }}
          onClick={handleClick}
        />
        <Notification className={style.icons} sx={{ fontSize: 42 }} />
      </div>
    </div>
  );
}

export default Header;
