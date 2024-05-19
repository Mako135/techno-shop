import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../assets/banner1.png";
import { SwiperSlide, Swiper } from "swiper/react";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySlider"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
