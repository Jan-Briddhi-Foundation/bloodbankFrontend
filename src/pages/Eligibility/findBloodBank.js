import Header from "../../components/Header/Header";
// import style from './findBloodBank.module.css';

import React from "react";

function findBloodBank() {
  return (
    <div>
      <Header />

      <div>
        <h1>Find Blood Bank</h1>
        <p>Find blood bank near your location.</p>
        <div>
          <h1>Map View</h1>
        </div>
      </div>
      {/* <div className={style.body}>
        <h1 className={style.title}>Find Blood Bank</h1>
        <p className={style.text}>Find blood bank near your location.</p>
        <div className={style.map}>
          <h1 className={style.forNow}>Map View</h1>
        </div>
      </div> */}
    </div>
  );
}

export default findBloodBank;
