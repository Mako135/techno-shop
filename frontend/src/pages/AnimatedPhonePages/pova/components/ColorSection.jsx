// CustomSwiper.js
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import green from "../assets/green-button.png";
import gray from "../assets/gray-button.png";
const ColorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Данные для слайдов
  const slides = [
    {
      text: "Зеленая комета",
      image: green,
      imageBack:
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-section3-color1-2d336148.jpg"
    },
   
    {
      text: "Серый метеорит",
      image: gray,
      imageBack:
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-section3-color2-3ec56d09.jpg"
    }
  ];

  // Функция обновления текущего слайда
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Функция переключения слайда
  const goToSlide = (index) => {
    swiperRef.slideTo(index);
  };

  let swiperRef;

  return (
    <div style={{ position: "relative" }}>
      <div className="slider-slogan">
        <h1>Здесь ваш слоган!</h1>
      </div>

      <div className="custom-pagination">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`pagination-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="circle"
            />
            {index === activeIndex && (
              <span className="pagination-text">{slide.text}</span>
            )}
          </button>
        ))}
      </div>

      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        draggable
        onSwiper={(swiper) => (swiperRef = swiper)}
        onSlideChange={handleSlideChange}
        className="color-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.imageBack}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ColorSection;
