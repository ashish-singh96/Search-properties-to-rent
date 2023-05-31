import React from 'react'
import './HomeUi.css';
const HomeUi = (props) => {
  return (
    <div className='home'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <h3>Price {props.price}</h3>
        <p>{props.about}</p>
    </div>
  )
}

export default HomeUi