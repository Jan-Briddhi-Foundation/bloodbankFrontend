import Header from '../../components/Header/Header';
// import thanks from '../../assets/thank you 1.svg';
import love from './love.png'

import React from 'react'
import  style  from './Inelligible.module.css';

function Inelligible() {
  return (
    <>
      <Header />
      <div className={style.body}>
        <h1 className={style.title}>Not Eligible</h1>
        <p className={style.note}>At this time, you are not eligible to donate blood. Contact your doctor for more informations. Thanks for trying!.</p>
        <div className={style.imgContainer}><img src={love} alt="" className={style.img}></img></div>
        <div className={style.note}>
      
        </div>
        <a href='/' className={style.link} >Read more about who can donate blood</a>
      </div>
    </>
  )
}

export default Inelligible
