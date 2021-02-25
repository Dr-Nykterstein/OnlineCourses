import React from 'react';
import '../../App.css';
import Carousel from '../carousel/Carousel';
import WhyUsExp from '../about/WhyUs';
import Footer from '../footer/Footer';

function WhyUs() {
  return (
    <>
      <Carousel title='Why Us?' />
      <WhyUsExp />
      <Footer />
    </>
  );
}

export default WhyUs;
