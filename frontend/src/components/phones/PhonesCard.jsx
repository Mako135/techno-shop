import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import spark from "../../assets/fullSpark.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PhonesCard = ({ spec }) => {
  const images = {};

  spec.photos.forEach((photo) => {
    const colorName = photo.color.name.toLowerCase(); // Convert color name to lowercase
    images[colorName] = photo.image; // Assign the image URL to the corresponding color key
  });


  return (
    <div className="phone-card">
      <div className="phone-card-img">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          className="phone-slider"
        >
          {/* {Object.entries(images).map(([color, imageUrl]) => (
            <SwiperSlide key={color}>
              <img src={imageUrl} alt="" />
            </SwiperSlide>
          ))} */}
          <SwiperSlide>
            <img src={spark} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={spark} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="phone-content">
        <p className="phone-title">{spec.title}</p>
        <p className="phone-price">200000</p>
        <div className="recommended-links">
          <Link className="recommended-link" to="/">
            <button className="buy-btn">Купить</button>
          </Link>
          <Link className="recommended-link" to={spec?.slug}>
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
