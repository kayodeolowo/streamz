import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

 import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
  import RoutesL from './config/RoutesL';



function App() {
  return (
   <BrowserRouter> 
      <Route render={props=> (
        <>
          <Header  {...props}/>
          <RoutesL/> 
          <Footer/>
        </>
      )} />
    
   </BrowserRouter>
  );
}

export default App;
