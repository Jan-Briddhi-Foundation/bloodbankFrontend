import Header from "../../components/Header/Header";
import Caret from "../../assets/CaretCircleRight.svg";
import React from "react";
import { Link } from "react-router-dom";
import { DonorRedirect } from "../../apis/LoggedInProfileType";

function Homepage() {
  (async () => {
    await DonorRedirect();
  })();

  return (
    <main>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Home
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              xxxxx
            </p>
          </div>
          <div>
            <Link to={"/bloodrequest"}>
              <button className="text-3xl max-[550px]:text-2xl bg-[#f9f9f9] w-full flex items-center gap-4 py-4 px-8 max-[550px]:px-4 mb-16 max-[550px]:mb-12 rounded-lg">
                <p className="mr-auto">Submit New Request </p>
                <img
                  src={Caret}
                  alt=""
                  className="w-20 max-[550px]:w-16 flex items-center "
                />
              </button>
            </Link>
            <Link to="/requesthistory">
              <button className="text-3xl max-[550px]:text-2xl bg-[#f9f9f9] w-full flex items-center gap-4 py-4 px-8 max-[550px]:px-4 mb-16 max-[550px]:mb-12 rounded-lg">
                <p className="mr-auto">View Request History</p>
                <img
                  src={Caret}
                  alt=""
                  className="w-20 max-[550px]:w-16 flex items-center "
                />
              </button>
            </Link>
            <Link to="/editprofile">
              <button className="text-3xl max-[550px]:text-2xl bg-[#f9f9f9] w-full flex items-center gap-4 py-4 px-8 max-[550px]:px-4 rounded-lg">
                <p className="mr-auto">Edit My Information</p>
                <img
                  src={Caret}
                  alt=""
                  className="w-20 max-[550px]:w-16 flex items-center "
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
