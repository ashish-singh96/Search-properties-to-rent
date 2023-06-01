import React from 'react'
import './HomeUi.css';
const HomeUi = (props) => {
  return (
    <div className='home'>
        <img src={props.img} alt=''/>
        <h3>Price {props.price}</h3>
        <p>{props.title}</p>
    </div>
  )
}

export default HomeUi
