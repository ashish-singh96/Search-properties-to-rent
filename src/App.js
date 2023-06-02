import './App.css';
import HomeUi from './component/HomeUi';
import Home from './HomeData.json'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Navbar/Record Keeping/Header';
import Text from './component/Navbar/Record Keeping/Text';
import Data from './component/Product API/Data';
import UsingFetch from './component/Product API/UsingFetch';

function App() {
  return (
    <div className='App
    '>
      {/* <Navbar/> */}
      {/* <div className='main'>{
        Home.map((element) => {
          return (
            <HomeUi
              img={element.img}
              title={element.title}
              price={element.price}
            />
          )
        })
      }
      </div> */}

      {/* <Header />
      <Text /> */}

      {/* <Data/> */}
      <UsingFetch/>

    </div>
  );
}

export default App;
