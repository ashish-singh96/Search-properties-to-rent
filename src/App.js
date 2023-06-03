import './App.css';
import HomeUi from './component/HomeUi';
import Navbar from './component/Navbar/Navbar'
import Header from './component/Navbar/Record Keeping/Header';
import Text from './component/Navbar/Record Keeping/Text';
import Data from './component/Product API/Data';
import UsingFetch from './component/Product API/UsingFetch';
import { imageListClasses } from '@mui/material';
import {BrowserRouter as Router,  Routes,  Route } from "react-router-dom";
import Buy from './component/ReactRouterDom/Buy';
import HomeNav from './component/ReactRouterDom/HomeNav';
import Rent from './component/ReactRouterDom/Rent';
import Sell from './component/ReactRouterDom/Sell';
import Resources from './component/ReactRouterDom/Resources';
import ManageProperty from './component/ReactRouterDom/ManageProperty';
import FetchDataApi from './component/FetchDataApi';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<FetchDataApi/>}/>
          <Route   path ='buy'  element={<Buy/>}/>
          <Route path ='rent'  element={<Rent/>}/>
          <Route path ='resources'  element={<Resources/>}/>
          <Route path ='sell'  element={<Sell/>}/>
          <Route path ='manageproperty'  element={<ManageProperty/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
