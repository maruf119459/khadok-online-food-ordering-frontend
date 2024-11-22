import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topFood } from './topFood';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        arrows:false
      };
    
    return (
        <div>
            <Slider {...settings}>
                {topFood.map((item, index) => <CarouselItem key={index} image={item.image} title={item.title}></CarouselItem>)}
            </Slider>
        </div>
    );
};

export default Carousel;