import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "./carousel.css";
import carousel1 from "../../Assets/realimage1.jpg";
import carousel2 from "../../Assets/realimagetwo.jpg";
import carousel3 from "../../Assets/image3.jpeg";
import carousel4 from "../../Assets/image4.jpeg";
import carousel5 from "../../Assets/image5.jpeg";

const SwiperSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const slogans = [
    "Every champion was once a contender didn't give up",
    "Dream as big as you can dream and anything is possible",
    "Hard work beats talent when talent doesn't work hard",
    "Success is failing nine times and getting up is 10",
    "Ambition is path to success",
  ];

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={activeIndex === index ? "fade-in" : "fade-out"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="main-slogan">
        <h5>{slogans[activeIndex]}</h5>
      </div>
    </div>
  );
};

export default SwiperSlider;
