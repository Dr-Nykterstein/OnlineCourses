/* eslint-disable */
import React from "react";

import Carousel from "../carousel/Carousel";
import WhyUsExp from "./WhyUs";
import Footer from "../footer/Footer";

import "../../App.css";

function WhyUs() {
  return (
    <>
      <Carousel title="Why Us?" />
      <WhyUsExp />
      <Footer />
    </>
  );
}

export default WhyUs;
