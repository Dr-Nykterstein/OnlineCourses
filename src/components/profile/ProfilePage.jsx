/* eslint-disable */
import React from "react";

import Carousel from "../carousel/Carousel";
import Profile from "./Profile";
import Footer from "../footer/Footer";

import "../../App.css";

function ProfilePage() {
  return (
    <>
      <Carousel title="Profile" />
      <Profile />
      <Footer />
    </>
  );
}

export default ProfilePage;
