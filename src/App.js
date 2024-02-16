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
          <Route path="/login" element={<Login />} />
          <Route path="/register1" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/profile" element={<ProfilePage />} /> {/*2*/}
          <Route path="/editprofile" element={<EditProfile />} /> {/*1*/}
          <Route path="/notifications" element={<NotificationDonor />} />{" "}
          {/*13*/}
          <Route path="/patient" element={<HomePage />} /> {/*3*/}
          <Route path="/bloodrequest" element={<NewRequest />} /> {/*4*/}
          <Route path="/requestsent" element={<RequestSent />} /> {/*5*/}
          <Route path="/requesthistory" element={<RequestHistoryPage />} />
          {/*6*/}
          <Route path="/donor" element={<HomepageDonor />} /> {/*7*/}
          <Route path="/donationcriteria" element={<Donorcriteria />} /> {/*8*/}
          <Route path="/findbloodbank" element={<FindBloodBank />} /> {/*10*/}
          <Route path="/thankyou" element={<ThankYou />}></Route> {/*12*/}
          <Route path="/inelligible" element={<Inelligible />}></Route> {/*9*/}
          <Route path="/donationconsent" element={<YourInfo />}></Route>{" "}
          {/*11*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
