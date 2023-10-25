import React from 'react';
import Header from '../../components/Header/Header';
import love from '../../assets/love 1.svg';
import style from './notEligible.module.css';



function notEligible() {
  return (
    <>
    <Header />
    <div className={style.body}>
      <section>
        <h1 className={style.title}>Not Eligible</h1>
        <p className={style.text}>At this time, you are not eligible to donate blood. Contact your doctor for more informations. 
<span className={style.appreciate}>Thanks for trying!</span></p>
      </section>
      <section>
        <div className={style.imgContainer}><img src={love} alt={'This is to express our gratitude towards your selfless act.'} className={style.img} /></div>
      </section>

      <a href='/' className={style.link}>Read more About who can donate blood.</a>
    </div>
    </>
  )
}

export default notEligible;
