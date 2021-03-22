/* eslint-disable */
import React, { Component } from "react";
import CardItem from "./CardItem";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
} from "swiper";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";
import "./AdBlockCards.css";
import "../cards/Cards.css";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
]);

class AdBlock extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 4,
      parallax: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 130,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <>
        <h1 className="projects-swiper-title">Homes guests love</h1>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://cf.bstatic.com/images/hotel/max1024x768/184/184961180.jpg"
                label="9.5"
                title="Monastero Santa Rosa Hotel"
                place="Québec, Canada"
                path=""
              />
            </div>
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_351,q_75,w_599/http://res.cloudinary.com/simpleview/image/upload/v1450804984/clients/houston/Four-Seasons-pool_d6577d65-932e-4a9a-927c-ea7ac3340521.jpg"
                label="8.0"
                title="Hotel 71"
                place="Austin, Texas"
                path=""
              />
            </div>
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://i.ytimg.com/vi/UlOhWmcndM8/maxresdefault.jpg"
                label="9.8"
                title="Grand Hotel Tremezzo"
                place="Udaipur, India"
                path=""
              />
            </div>
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1QU6YkcomcyHdi7c6UTh5hEAle6tuvOxiw&usqp=CAU"
                label="8.8"
                title="Archer Hotel Austin"
                place="Via Provinciale Regina,  Lake Como"
                path=""
              />
            </div>
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://dream-hostels.com/wp-content/uploads/2019/11/komnaty1-1180x480.jpg"
                label="9.1"
                title="Giraffe Manor"
                place="Nairobi, Kenya"
                path=""
              />
            </div>
            <div className="swiper-slide">
              <CardItem
                class="fixed__size"
                src="https://cf.bstatic.com/images/hotel/max1024x768/154/154474106.jpg"
                label="7.9"
                title="RAAS Jodhpur"
                place="Jodhpur, Rajasthan India"
                path=""
              />
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </>
    );
  }
}

export default AdBlock;
