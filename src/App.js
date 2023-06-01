import './App.css';
import HomeUi from './component/HomeUi';
import Home from './HomeData.json'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Navbar/Record Keeping/Header';
import Text from './component/Navbar/Record Keeping/Text';

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

      <Header />
      <Text />

    </div>
  );
}

export default App;
