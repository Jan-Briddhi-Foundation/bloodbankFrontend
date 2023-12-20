import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Register from "../src/pages/Register1/Register1";
import Register2 from "../src/pages/Register2/Register2";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/Profilepage/ProfilePage";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register1" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
