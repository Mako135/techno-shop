import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import "./phone.slider.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PhonesCard = ({ spec }) => {
  const images = {
    black: spec?.imgBlack,
    white: spec?.imgWhite,
    yellow: spec?.imgYellow,
    blue: spec?.imgBlue
  };

  return (
    <div className="phone-card">
      <div className="phone-card-img">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          pagination={true} 
          slidesPerView={1}
          onActiveIndexChange={(swiper) => {
            console.log("active index is", swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <img src={images.black} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.white} alt="" />
          </SwiperSlide>
          {images.blue ? (
            <SwiperSlide>
              <img src={images.blue} alt="" />
            </SwiperSlide>
          ) : null}
          {images.yellow ? (
            <SwiperSlide>
              <img src={images.yellow} alt="" />
            </SwiperSlide>
          ) : null}
        </Swiper>
      </div>
      <div className="phone-content">
        <p className="phone-title">{spec.title}</p>

        <p className="phone-price">{spec.price}</p>
        <div className="recommended-links">
          <Link className="recommended-link" to="/">
            <button className="buy-btn">Купить</button>
          </Link>
          <Link className="recommended-link" to="11">
            <div className="about-phone">
              <p>Подробнее</p>
              <img src={arrow} alt="" height={12} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

PhonesCard.propTypes = {
  spec: PropTypes.any.isRequired
};

export default PhonesCard;
