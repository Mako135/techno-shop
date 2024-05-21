import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";

const SectionEight = ({ figure_1, figure_2, figure_3, figure_4 }) => {
  return (
    <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="mySlider"
    >
      <SwiperSlide>
        <img src={figure_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={figure_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={figure_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={figure_4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

SectionEight.propTypes = {
  figure_1: PropTypes.string.isRequired,
  figure_2: PropTypes.string.isRequired,
  figure_3: PropTypes.string.isRequired,
  figure_4: PropTypes.string.isRequired,
};

export default SectionEight;
