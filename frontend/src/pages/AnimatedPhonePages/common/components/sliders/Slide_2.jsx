import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slide_2 = () => {
  return (
    <div className="slider-container">
      <div className="frames">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/left_bottom.png"
          alt=""
          className="left-bottom"
        />
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/left_top.png"
          alt=""
          className="left-top"
        />
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/right_bottom.png"
          alt=""
          className="right-bottom"
        />
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/right_top.png"
          alt=""
          className="right-top"
        />
      </div>
      <div className="slider-inner">
        <h1>Съемка на глубине 10 метров</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          speed={1000}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          className="swiper-common"
          pagination
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/specimenPageSection/1_1_cl6.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/specimenPageSection/1_2_cl6.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/specimenPageSection/1_3_cl6.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slide_2;
