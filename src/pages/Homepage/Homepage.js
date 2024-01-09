import Header from '../../components/Header/Header';
import Caret from '../../assets/CaretCircleRight.svg';
import style from './Hompage.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <main>
      <Header />
      <div className={style.Home} >
        <h1 className={style.title} > Home</h1>
        <p className={style.text} >xxxxx</p>
            <section className={style.buttonNav}>
              <Link
              to={"/request"}
              >
              <button className={style.button}><p className={style.buttonText}>Submit New Request  </p> <img src={Caret} alt='' className={style.circle} /></button>
              </Link>
              <Link to="/requesthistory">
              <button className={style.button}><p className={style.buttonText}>View Request History</p> <img src={Caret} alt='' className={style.circle} /></button>
              </Link>
              <Link>
              <button className={style.button}><p className={style.buttonText}>Edit My Information </p> <img src={Caret} alt='' className={style.circle} /></button>
              </Link>
            </section>
      </div>
    </main>
  )
}

export default Homepage
