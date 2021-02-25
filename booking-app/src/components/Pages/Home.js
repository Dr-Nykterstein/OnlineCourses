import React from 'react';
import '../../App.css';
import Carousel from '../carousel/Carousel';
import HomeExp from '../home/Home';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <Carousel title='To travel is to live' />
      <HomeExp />
      <Footer />
    </>
  );
}

export default Home;
