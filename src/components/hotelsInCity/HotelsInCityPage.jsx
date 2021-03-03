import React from 'react';
import {useLocation} from 'react-router-dom'

import Carousel from '../carousel/Carousel';
import HotelsInCityExp from './HotelsInCity';
import Footer from '../footer/Footer';

import '../../App.css';

const HotelsInCity = () => {
  return (
    <>
      <Carousel title= {`Hotels in ${useLocation().state.name}`} />
      <HotelsInCityExp name={useLocation().state.name}/>
      <Footer />
    </>
  );
}

export default HotelsInCity;