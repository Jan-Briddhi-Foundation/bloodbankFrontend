import React from "react";
import "./DonorCriteria.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const Donorcriteria = () => {
  return (
    <div className="donor-criteria">
      <div className="be-sure-to-be-eligible-to-dona-parent">
        <p className="donor-criteria1">Donor Criteria</p>
        <p className="be-sure-to">
          {" "}
          Be sure to be eligible to donate your blood.
        </p>
      </div>
      {/* main content */}
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">In the past 1 year, </span>
          <span>
            {` I was treated for Rabies or received Hepatitis B immune globulin.`}
          </span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          {" "}
          <span className="in-the-past">In the past 6 months,</span>
          <span>{` I had a tattoo, ear or skin piercing or acupuncture, received blood or blood products, serious illness or major surgery, contact with a person with Hepatitis or Yellow Jaundice. `}</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container2 content">
        <div className="text">
          <span className="in-the-past">{`In the past 1 month, `}</span>
          <span>I had immunisations.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">In the past 3 months,</span>
          <span> I donated blood or been treated for Malaria.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`In the past 24h, `}</span>
          <span>I had an alcoholic beverage.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`Presently, `}</span>
          <span>I’m pregnant or breast feeding my child.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className=" text">I am between 18 and 60 years of age.</div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">My body weight is not less than 45kg.</div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`Presently, `}</span>
          <span>
            I’m suffering from cough, Influenza or sore throat, common cold.
          </span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`Never, `}</span>
          <span>{`have I had TB, bronchial asthma or allergic disorder, liver disease, kidney disease, fits or fainting, blue or purple spots on the skin or mucous membranes, received human pituitary - growth hormones, etc. `}</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`Presently, `}</span>
          <span>
            I’m free from diabetes, not suffering from chest pain, heart disease
            or high blood pressure, cancer, a blood clotting problem or blood
            disease, unexplained fever, weight loss, fatigue, night sweats,
            enlarged lymph nodes in armpits, neck or groin, white patches on the
            mouth, etc.
          </span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`Presently, `}</span>
          <span>I am menstruating.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`In the past 72h, `}</span>
          <span>I had dental work or took Aspirin.</span>
        </div>
        <Donoricon />
      </div>
      <div className="in-the-past-container content">
        <div className="text">
          <span className="in-the-past">{`In the past 48h, `}</span>
          <span>
            I took antibiotics or medications (Allopathic, Ayurveda, Sidha or
            Homeo).
          </span>
        </div>
        <Donoricon />
      </div>
    </div>
  );
};

function Donoricon() {
  return (
    <div className="markicon">
      <button>
        <CheckIcon sx={{ fontSize: 41 }} className="DonorIcon" />
      </button>
      <button>
        <CloseIcon sx={{ fontSize: 41 }} className="DonorIcon" />
      </button>
    </div>
  );
}

export default Donorcriteria;