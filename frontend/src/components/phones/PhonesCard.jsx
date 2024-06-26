import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PhonesCard = ({ spec }) => {
  const images = {};
  spec?.photos.forEach((photo) => {
    const colorName = photo.color.color.toLowerCase();
    images[colorName] = photo.image;
  });

  return (
    <div className="phone-card">
      <div className="phone-card-img">
        {images && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                const colors = Object.keys(images);
                return `<span class="${className}" style="background-color: ${colors[index]}; width: 1rem; height: 1rem;float: left;"></span>`;
              }
            }}
            className="phone-slider"
          >
            {Object.entries(images).map(([color, imageUrl]) => (
              <SwiperSlide key={color}>
                <img src={imageUrl} alt={color} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="phone-content">
        <p className="phone-title">{spec.title}</p>
        <p className="phone-price">{spec.price}₸</p>
        <div className="recommended-links">
          <Link className="recommended-link" to={spec?.stores[0]?.link} target="_blank">
            <button className="buy-btn">Купить</button>
          </Link>
          <Link className="recommended-link" to={`/phones/${spec?.slug}`}>
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
