import React from "react";

import Carousel from "../carousel/Carousel";
import CardsCity from "../cards/CardsCity";
import Footer from "../footer/Footer";
import AdBlock from '../cards/AdBlockCards';


import "../../App.css";

function HomePage() {
  return (
    <>
      <Carousel title="To travel is to live" />
      <CardsCity />
      <AdBlock />
      <Footer />
    </>
  );
}

export default HomePage;
