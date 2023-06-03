import React from 'react'
import HomeData from './HomeData.json';
import HomeUi from './HomeUi';
const FetchDataApi = () => {
  return (
    <div>
       <div className='main'>{
        HomeData.map((element)=>{
      return(
        <HomeUi
          img={element.img}
          price={element.price}
          title={element.title}
          about={element.about}
        />
      )
     })
     }

      </div>
    </div>
  )
}

export default FetchDataApi