import Header from '../../components/Header/Header';
import style from './yourInfo.module.css';
import NextIcon from '../../assets/CaretCircleRight.svg';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function yourInfo() {
  return (
    <div>
      <Header />
      <div>
        <h1 className={style.titleInfo}>Your information</h1>
        <section className={style.dataCollection}>
            <input type='text' placeholder='First Name' name='firstName' className={style.first} required />
            <input type='text' placeholder='Last Name' name="lastName" className={style.first} required />
            <input type='tel' placeholder='Phone' name="phone" className={style.first} required/>
            <input type='Email' placeholder='Email' name="gmail" className={style.first} required/>
            <div className={`${style.selectContainer} ${style.first} `}>
            <select name="bloodType" placeholder='Blood Type' className={` ${style.select}`}>
              <option value="" selected>
                Blood Type
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <div className={style.IconContainer}>
                <ArrowDropDownIcon className={style.DropIcon} sx={{ fontSize: 50 }} />
            </div>
            </div>
        </section>
      </div>
      <div className={style.NextIconCon} >
      <Link to="/thankyou"><img src={NextIcon} alt="" className={style.NextIcon}/> </Link>
      </div>
    </div>
  );
}
export default yourInfo
