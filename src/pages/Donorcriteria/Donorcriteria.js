import React from "react";
import Header from "../../components/Header/Header";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { qualifyDonor } from "../../apis/QualifyNotifications";
import { useNavigate } from "react-router-dom";
// import styles from "./DonorCriteria.module.css";

const Donorcriteria = () => {
  const inputClass =
    "flex flex-col items-center  p-2 m-4 bg-[#F9F9F9] rounded-[5px] md:min-h-[5rem] text-start md:justify-center md:mx-40  w-[full] my-0 border";

  return (
    <>
      <Header />
      <div className="flex flex-col my-[0] text-[var(--font-size-base)] font-[var(--font-roboto)] gap-6">
        <div>
          <p className="text-center text-[#000] font-[Roboto] text-[2.1875rem] not-italic font-bold leading-[1.875rem] mx-[0] my-4">
            Donor Criteria
          </p>
          <p className="text-[irem] font-[Roboto] text-[#6b6b6b] text-center">
            {" "}
            Be sure to be eligible to donate your blood.
          </p>
        </div>
        {/* main content */}
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">In the past 1 year, </span>
            <span>
              {` I was treated for Rabies or received Hepatitis B immune globulin.`}
            </span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            {" "}
            <span className="in-the-past">In the past 6 months,</span>
            <span>{` I had a tattoo, ear or skin piercing or acupuncture, received blood or blood products, serious illness or major surgery, contact with a person with Hepatitis or Yellow Jaundice. `}</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`In the past 1 month, `}</span>
            <span>I had immunisations.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">In the past 3 months,</span>
            <span> I donated blood or been treated for Malaria.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`In the past 24h, `}</span>
            <span>I had an alcoholic beverage.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`Presently, `}</span>
            <span>I’m pregnant or breast feeding my child.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className=" text">I am between 18 and 60 years of age.</div>
        </div>
        <div className={inputClass}>
          <div className="text">My body weight is not less than 45kg.</div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`Presently, `}</span>
            <span>
              I’m suffering from cough, Influenza or sore throat, common cold.
            </span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`Never, `}</span>
            <span>{`have I had TB, bronchial asthma or allergic disorder, liver disease, kidney disease, fits or fainting, blue or purple spots on the skin or mucous membranes, received human pituitary - growth hormones, etc. `}</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`Presently, `}</span>
            <span>
              I’m free from diabetes, not suffering from chest pain, heart
              disease or high blood pressure, cancer, a blood clotting problem
              or blood disease, unexplained fever, weight loss, fatigue, night
              sweats, enlarged lymph nodes in armpits, neck or groin, white
              patches on the mouth, etc.
            </span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`Presently, `}</span>
            <span>I am menstruating.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`In the past 72h, `}</span>
            <span>I had dental work or took Aspirin.</span>
          </div>
        </div>
        <div className={inputClass}>
          <div className="text">
            <span className="in-the-past">{`In the past 48h, `}</span>
            <span>
              I took antibiotics or medications (Allopathic, Ayurveda, Sidha or
              Homeo).
            </span>
          </div>
        </div>
      </div>
      <div>
        <Donoricon></Donoricon>
      </div>
    </>
  );
};
function Donoricon() {
  const redirect = useNavigate();
  return (
    <div className="flex justify-end mr-[9rem] ">
      <button
        onClick={() => {
          qualifyDonor({ qualify: true });
          redirect("/findbloodbank");
        }}
      >
        <CheckIcon
          sx={{ fontSize: 41 }}
          className=" text-[#393D3F] px-[0.08rem] py-[0.15rem] border-[2px] border-[solid] bg-[#f9f9f9] mx-[0.8rem] my-[0.2rem] w-1/5 cursor-pointer"
        />
      </button>
      <button
        onClick={() => {
          qualifyDonor({ qualify: false });
          redirect("/inelligible");
        }}
      >
        <CloseIcon
          sx={{ fontSize: 41 }}
          className="block text-[#393D3F] px-[0.08rem] py-[0.15rem] border-[2px] border-[solid] bg-[#f9f9f9] mx-[0.8rem] my-[0.2rem]  w-1/5 cursor-pointer"
        />
      </button>
    </div>
  );
}

export default Donorcriteria;
