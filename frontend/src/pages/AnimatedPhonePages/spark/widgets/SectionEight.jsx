import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const SectionEight = () => {
    const figure_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF1.jpg";
    const figure_2 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF2.jpg";
    const figure_3 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF3.jpg";
    const figure_4 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF4.jpg";
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

export default SectionEight;
