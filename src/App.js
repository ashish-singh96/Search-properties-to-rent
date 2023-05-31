import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import HomeUi from './component/HomeUi';
import Home from './HomeData.json';
function App() {
  return (
    <div>
      <Navbar />
      <div className='main'>{
        Home.map((element) => {
          return (
            <HomeUi
              title={element.title}
              img={element.img}
              price={element.price}
              about={element.about}
            />

          )
        })
      }

      </div>
    </div>
  );
}

export default App;
