import React from 'react';

import Carousel from '../carousel/Carousel';
import ApartmentsExp from './Apartments';
import Footer from '../footer/Footer';

import '../../App.css';

function Apartments() {
  return (
    <>
      <Carousel title="Apartments" />
      <ApartmentsExp />
      <Footer />
    </>
  );
}

export default Apartments;
