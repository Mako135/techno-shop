import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../assets/main-banner.PNG";
import banner2 from "../assets/main-banner-2.PNG";
import banner3 from "../assets/main-banner-3.PNG";
import { SwiperSlide, Swiper } from "swiper/react";

const Slider = () => {
  return (
    <div className="slider-sec">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySlider"
      >
        <SwiperSlide>
          <img src={banner1} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
