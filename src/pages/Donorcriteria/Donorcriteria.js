import React from "react";
import Header from "../../components/Header/Header";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { qualifyDonor } from "../../apis/QualifyNotifications";
import { useNavigate } from "react-router-dom";
import { PatientRedirect } from "../../apis/LoggedInProfileType";

const Donorcriteria = () => {
  (async () => await PatientRedirect())();

  const redirect = useNavigate();
  const quizstyle = "bg-[#f9f9f9] p-8 mb-6 text-3xl rounded";
  const quizSpanStye = "font-medium";

  return (
    <>
      <Header />
      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Donor Criteria
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Be sure to be eligible to donate your blood.
            </p>
          </div>
          <div>
            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 1 year, </span>I was
              treated for Rabies or received Hepatitis B immune globulin.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 6 months, </span>I had
              a tattoo, ear or skin piercing or acupuncture, received blood or
              blood products, serious illness or major surgery, contact with a
              person with Hepatitis or Yellow Jaundice.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 3 months, </span>I
              donated blood or been treated for Malaria.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 1 month, </span>I had
              immunisations.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 48h, </span>I took
              antibiotics or medications (Allopathic, Ayurveda, Sidha or Homeo).
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 24h, </span>I had an
              alcoholic beverage.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>In the past 72h, </span>I had
              dental work or took Aspirin.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>Presently, </span>I’m suffering
              from cough, Influenza or sore throat, common cold.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>Presently, </span>I’m pregnant or
              breast feeding my child.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>Presently, </span>I am menstruating
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>Presently, </span>I’m free from
              diabetes, not suffering from chest pain, heart disease or high
              blood pressure, cancer, a blood clotting problem or blood disease,
              unexplained fever, weight loss, fatigue, night sweats, enlarged
              lymph nodes in armpits, neck or groin, white patches on the mouth,
              etc.
            </p>

            <p className={quizstyle}>
              <span className={quizSpanStye}>Never, </span>have I had TB,
              bronchial asthma or allergic disorder, liver disease, kidney
              disease, fits or fainting, blue or purple spots on the skin or
              mucous membranes, received human pituitary - growth hormones, etc.
            </p>

            <p className={quizstyle}>I am between 18 and 60 years of age.</p>

            <p className={quizstyle}>My body weight is not less than 45kg.</p>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-10 items-center">
            <button
              className="text-4xl p-4 bg-[green] flex items-center justify-center rounded gap-6 text-white"
              onClick={() => {
                qualifyDonor({ qualify: true });
                redirect("/findbloodbank");
              }}
            >
              <CheckIcon sx={{ fontSize: 38 }} className="" />
              <p>Yes</p>
            </button>

            <button
              className="text-4xl p-4 bg-[red] flex items-center justify-center rounded gap-6 text-white"
              onClick={() => {
                qualifyDonor({ qualify: false });
                redirect("/inelligible");
              }}
            >
              <CloseIcon sx={{ fontSize: 38 }} className="" />
              <p>No</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donorcriteria;
