import Header from '../../components/Header/Header';
import Caret from '../../assets/CaretCircleRight.svg';
import style from './Hompage.module.css';

import React from 'react'

function Homepage() {
  return (
    <main>
      <Header />
      <div className={style.Home} >
        <h1 className={style.title} > Home</h1>
        <p className={style.text} >xxxxx</p>
            <section className={style.buttonNav}>
                <button className={style.button}><p className={style.buttonText}>Submit New Request  </p> <img src={Caret} alt='' className={style.circle} /></button>
                <button className={style.button}><p className={style.buttonText}>View Request History</p> <img src={Caret} alt='' className={style.circle} /></button>
                <button className={style.button}><p className={style.buttonText}>Edit My Information </p> <img src={Caret} alt='' className={style.circle} /></button>
            </section>
      </div>
    </main>
  )
}

export default Homepage
