import Header from '../../components/Header/Header';
import requestImg from '../../assets/RequestSent.svg';
import style from './RequestSent.module.css';
import React from 'react'

function RequestSent() {
  return (
    <div>
      <Header />
      <main className={style.body} >
      <h1 className={style.title}>Your request was sent</h1>
      <p className={style.innertext}><span>All set! </span>Now you just have to wait for someone to match your blood request.</p>
      <div className={style.imgContainer}><img src={requestImg} alt="" className={style.img} /></div>
      <p className={style.linkToHomepage}><a href='/'>Back to Homepage</a></p>
      </main>
    </div>
  )
}

export default RequestSent
