import { useState } from "react";
import { Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FlipSecTen = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flip-10">
      <div className="flip-text">
        <h1>
          FreeCam <br />
          <span>
            Стабилизируй смартфон. <br />
            Освободи руки
          </span>
        </h1>
        <p>
          Раскрой и установи смартфон в удобном положении, чтобы с комфортом
          общаться по видеосвязи, фотографировать, делать селфи и снимать видео
        </p>
      </div>
      <div className="flip-10-slider">
        <Swiper
          direction="vertical"
          spaceBetween={10}
          slidesPerView={1.7}
          modules={[Thumbs, Autoplay]}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="flip-10-slider-first"
        >
          <SwiperSlide>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box6_1.jpg"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box5_1.jpg"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box4_1.jpg"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <video src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/shootMethodSection/Hovercall.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <video src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/shootMethodSection/timelapse.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box2_1.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box7_1.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          slidesPerView={9}
          spaceBetween={10}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          className="thumbs-swiper"
        >
          <SwiperSlide>
            <div className="overlay"></div>
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box6_1.jpg"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box5_1.jpg"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box4_1.jpg"
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <video src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/shootMethodSection/Hovercall.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <video src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/shootMethodSection/timelapse.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box2_1.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="overlay"></div>

            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/shootMethodSection/box7_1.jpg"
              alt="Slide 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FlipSecTen;
