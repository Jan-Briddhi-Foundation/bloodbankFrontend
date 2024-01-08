import React from "react";
import Header from "../../components/Header/Header";
import "./DonorCriteria.css";

const FindBloodBank = () => {
  return (
    <>
    <Header />
    <div className="donor-criteria">
      <div className="be-sure-to-be-eligible-to-dona-parent">
        <p className="donor-criteria1">Donor Criteria</p>
        <p className="be-sure-to">
          {" "}
          Be sure to be eligible to donate your blood.
        </p>
      </div>
    </div>
    
    </>
  );
};

export default FindBloodBank;
