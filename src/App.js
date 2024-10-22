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

import HomepageDonor from "./pages/HomepageDonor/HomepageDonor";
import Donorcriteria from "./pages/Donorcriteria/Donorcriteria";
import FindBloodBank from "./pages/FindBloodBank/FindBloodBank";
import ThankYou from "./pages/ThankYou/ThankYou";
import Inelligible from "./pages/Inelligible/Inelligible";
import YourInfo from "./pages/yourInfo/yourInfo";
import HomePage from "./pages/Homepage/Homepage";
import NewRequest from "./pages/NewRequest/NewRequest";
import RequestSent from "./pages/RequestSent/RequestSent";
import RequestHistoryPage from "./pages/RequestHistory/RequestHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<HomepageDonor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register1" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/notifications" element={<NotificationDonor />} />
          <Route path="/patient" element={<HomePage />} />
          <Route path="/bloodrequest" element={<NewRequest />} />
          <Route path="/requestsent" element={<RequestSent />} />
          <Route path="/requesthistory" element={<RequestHistoryPage />} />
          <Route path="donor" element={<HomepageDonor />} />

          <Route path="/donationcriteria" element={<Donorcriteria />} />
          <Route path="/findbloodbank" element={<FindBloodBank />} />
          <Route path="/thankyou" element={<ThankYou />}></Route>
          <Route path="/inelligible" element={<Inelligible />}></Route>
          <Route path="/donationconsent" element={<YourInfo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
