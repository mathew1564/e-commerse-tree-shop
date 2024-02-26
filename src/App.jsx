
import './App.scss';
import Main from './Components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import ProductDetail from './Components/Layout/Products/ProductDetails/ProductDetails';
import AllProducts from './Components/Layout/Products/AllProducts/AllProducts';
import { Value } from './Data/DataSava';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AllRoutes } from './Routes/AllRoutes';
import {BrowserRouter} from 'react-router-dom'
import { useRef } from 'react';
import Scroll from './Common/Scroll'
function App() {
  const toast = useRef(null);
  const allRoutes = AllRoutes;
  const [isLogin,setIslogin]=useState(false);
  const [cart,setCart]=useState([]);
  const change=Cookies.get('isLogin');
  useEffect(()=> {
    if (Cookies.get('isLogin')) {
      setIslogin(JSON.parse(Cookies.get('isLogin')))}
  },[change])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


 
  // console.log('render');
  return (
    <BrowserRouter>
      <Scroll />
  <Value.Provider value={{isLogin,setIslogin,cart,setCart,scrollToTop}}>
  
      <Main></Main>
  </Value.Provider>
 
    </BrowserRouter>
  );
}

export default App;
