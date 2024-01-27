// import styles from "./HomepageDonor.module.css";
import Header from "../../components/Header/Header";
import check from "../../assets/check.svg";
import share from "../../assets/share.svg";
import cross from "../../assets/cross.svg";
import calendar from "../../assets/calendar.svg";
import location from "../../assets/location.svg";
import { Link } from "react-router-dom";

const HomepageDonor = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-[5vh] text-center">
        <div className="{styles.title}">
          <h1 className="font-[Roboto] text-[2.5rem] font-bold leading-[30px] tracking-[0.02em] mb-[3vh]">
            Donate Blood
          </h1>
          <span className="font-[Roboto] text-[1rem] font-normal leading-[19px] tracking-[0.02em] text-center text-[rgba(107,_107,_107,_1)]">
            Each donation can help save up to 3 lives!
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-2 w-[100%] p-4  md:w-[60vw]">
          <section className="relative rounded-[5px] pl-[2vh] pr-[4vh] py-[2vh] flex justify-between h-[12vh] bg-[rgba(249,_249,_249,_1)] w-[100%]">
            <div className="w-[full] flex flex-col justify-between gap-2">
              <span>Blood Request: Type AB</span>
              <div className="flex gap-[2rem]">
                <span className="flex gap-1 items-center text-xs">
                  <img
                    className="w-[1rem] h-[1rem]"
                    src={calendar}
                    alt="calendarIcon"
                  />
                  Before 05/31/23
                </span>
                <span className="flex gap-1 items-center text-xs">
                  <img
                    className="w-[1rem] h-[1rem]"
                    src={location}
                    alt="calendarIcon"
                  />
                  City
                </span>
              </div>
            </div>
            <div className="flex  self-start items-center">
              <img
                src={share}
                alt="share icon"
                className="h-[3.125rem] w-[1.875rem] relative -bottom-[0.5625rem] -right-[0.625rem]"
              />

              <Link to={"/donatedetails"}>
                <img
                  className="h-[3.125rem] w-[1.875rem] relative -bottom-[0.5625rem] mt-[0.25rem] -right-5"
                  src={check}
                  alt="check icon"
                />
              </Link>
            </div>
            <img
              className="absolute right-[0.5%] top-[3%] cursor-pointer"
              src={cross}
              alt="check icon"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomepageDonor;
