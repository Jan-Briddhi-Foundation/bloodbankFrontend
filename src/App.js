import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Register from "../src/pages/Register1/Register1";
import Register2 from "../src/pages/Register2/Register2";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/Profilepage/ProfilePage";
import EditProfile from "./pages/EditProfile/EditProfile";
import NotificationDonor from "./pages/Notification/NotificationDonor";
// import Donate from "./pages/HomepageDonor"
import HomepageDonor from "./pages/HomepageDonor/HomepageDonor";
import Donorcriteria from "./pages/Donorcriteria/Donorcriteria";
import FindBloodBank from "./pages/FindBloodBank/FindBloodBank";
import ThankYou from "./pages/ThankYou/ThankYou";
import Inelligible from "./pages/Inelligible/Inelligible";
import YourInfo from "./pages/yourInfo/yourInfo";
import HomePage from "./pages/Homepage/Homepage";
import NewRequest from "./pages/NewRequest/NewRequest";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register1" element={<Register />} />
          <Route path="/patient" element={<HomePage/>} />
          <Route path="/request" element={<NewRequest/>}/>
          <Route path="/register2" element={<Register2 />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/notifications" element={<NotificationDonor/>}/>
          <Route path="/donate" element={<HomepageDonor/>}/>
          <Route path="/donatedetails" element={<Donorcriteria/>}/>
          <Route path="/findbloodbank" element={<FindBloodBank></FindBloodBank>}/>
          <Route path="/thankyou" element={<ThankYou/>}></Route>
          <Route path="/inelligible" element={<Inelligible></Inelligible>}></Route>
          <Route path="/yourinfo" element={<YourInfo></YourInfo>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
