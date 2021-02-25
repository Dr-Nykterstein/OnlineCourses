import React from 'react';
import '../../App.css';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'Photo 1',
        url: "https://drifttravel.com/wp-content/uploads/2018/09/Radisson-Blu-Hotel-Kyiv-room-e1536676618112.jpg"
    },
    {
        name: 'Photo 2',
        url: "https://www.h-hotels.com/_Resources/Persistent/a0de8fa54a09ebc240367df1be348893a89e717f/zimmer-superiorzimmer-07-hyperion-hotel-basel.jpg"
    },
    {
        name: 'Photo 3',
        url: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg"
    },
    {
        name: 'Photo 4',
        url: "https://pix10.agoda.net/hotelImages/369/3691455/3691455_17121513180060428651.jpg"
    },
    {
        name: 'Photo 5',
        url: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
    },
    {
        name: 'Photo 6',
        url: "https://pix10.agoda.net/hotelImages/1266232/-1/e413ebfc066750d8e82e8eae8d80aac5.jpg"
    }
]

function Carousel(props) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'slides',
        autoplay: true,
        autoplaySpeed: 2900,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                {photos.map((photos) => {
                    return (
                        <div className="slides">
                            <div className="carousel-container">
                                <img className="carousel-img" src={photos.url} />
                                <h1>{props.title}</h1>
                                <p>Travel far enough, you meet yourself</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default Carousel;