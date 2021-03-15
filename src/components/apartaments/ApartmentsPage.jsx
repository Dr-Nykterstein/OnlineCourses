import React from 'react';

import Carousel from '../carousel/Carousel';
import ApartmentsExp from './Apartments';
import Footer from '../footer/Footer';
import SearchPanel from '../search-panel/SearchPanel';

import '../../App.css';
import '../search-panel/SearchPanel.css'

function Apartments() {
  return (
    <>
      <Carousel title="Apartments" />
      <ApartmentsExp />
      <SearchPanel />
      <Footer />
    </>
  );
}

export default Apartments;
