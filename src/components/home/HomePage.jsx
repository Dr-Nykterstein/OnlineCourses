import React from 'react';

import Carousel from '../carousel/Carousel';
import CardsCity from '../cards/CardsCity';
import Footer from '../footer/Footer';

import '../../App.css';

function Home() {
  return (
    <>
      <Carousel title="To travel is to live" />
      <CardsCity />
      <Footer />
    </>
  );
}

export default Home;
