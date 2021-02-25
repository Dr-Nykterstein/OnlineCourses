import React from 'react';
import '../../App.css';
import Carousel from '../carousel/Carousel';
import ApartmentsExp from '../apartaments/Apartments';
import Footer from '../footer/Footer';

function Apartments() {
  return (
    <>
      <Carousel title='Apartments' />
      <ApartmentsExp />
      <Footer />
    </>
  );
}

export default Apartments;

