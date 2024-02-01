import Header from "../../components/Header/Header";
import Caret from "../../assets/CaretCircleRight.svg";
// import style from "./Hompage.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="m-2 text-2xl"> Home</h1>
        <p className="items-center text-3xl">xxxxx</p>
        <section className="my-auto m-[2rem] w-[100%] flex flex-col items-center ">
          <Link to={"/request"}>
            <button className="flex items-center gap-4 p-2 rounded-[5px] min-h-5 max-w-[90vw] text-start m-[1.8rem]">
              <p className="mx-auto w-[29rem] my-0 ">Submit New Request </p>{" "}
              <img
                src={Caret}
                alt=""
                className="mx-auto h-[2.2rem] flex items-center my-0"
              />
            </button>
          </Link>
          <Link to="/requesthistory">
            <button className="flex items-center gap-4 p-2 rounded-[5px] min-h-5 max-w-[90vw]  text-start justify-between m-[1.8rem]">
              <p className="mx-auto w-[29rem] my-0">View Request History</p>{" "}
              <img
                src={Caret}
                alt=""
                className="mx-auto h-[2.2rem] flex items-center my-0"
              />
            </button>
          </Link>
          <Link to="/editprofile">
            <button className="flex items-center gap-4 p-2 rounded-[5px] min-h-5 max-w-[90vw] text-start m-[1.8rem]">
              <p className="mx-auto  w-[29rem] my-0">Edit My Information </p>{" "}
              <img
                src={Caret}
                alt=""
                className="mx-auto h-[2.2rem] flex items-center my-0"
              />
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Homepage;
