import './App.css';
import HomeUi from './component/HomeUi';
import Home from './HomeData.json'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Navbar/Record Keeping/Header';
import Text from './component/Navbar/Record Keeping/Text';
import Data from './component/Product API/Data';
import UsingFetch from './component/Product API/UsingFetch';
import { imageListClasses } from '@mui/material';

function App() {
  return (
    <div>
     {/* <Navbar/>
     <div className='main'>{
     Home.map((element)=>{
      return(
        <HomeUi
          img={element.img}
          price={element.price}
          title={element.title}
          about={element.about}
          Gupta={element.Gupta}
        />
      )
     })
     }

     </div> */}

    </div> 
  );
}

export default App;
