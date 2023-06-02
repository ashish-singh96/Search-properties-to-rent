import React from 'react'
import './HomeUi.css';
const HomeUi = (props) => {
  return (
    <div>
      <div className='home'>
       <img src={props.img}></img>
       <h3>{props.price}</h3>
       <h3>{props.title}</h3>
       <p>{props.about}</p>
       <h4>{props.Gupta}</h4>
      </div>
    </div>
  )
}

export default HomeUi
