import React from "react";
import Logo from "../../assets/logo.svg";
import Email from "@mui/icons-material/EmailOutlined";
import Logout from "@mui/icons-material/LogoutOutlined";
import Account from "@mui/icons-material/AccountCircleOutlined";
import Notification from "@mui/icons-material/NotificationsNoneOutlined";
import "./Header.css";
import Settings from "@mui/icons-material/SettingsOutlined";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="Logo" alt="logo" />
      <h1 className="compname">Floating Blood Bank</h1>
      <div className="icon">
        <Settings className="icons" sx={{ fontSize: 42 }} />
        <Email className="icons" sx={{ fontSize: 42 }} />
        <Logout className="icons" sx={{ fontSize: 42 }} />
        <Account className="icons" sx={{ fontSize: 42 }} />
        <Notification className="icons" sx={{ fontSize: 42 }} />
      </div>
    </div>
  );
}

export default Header;
