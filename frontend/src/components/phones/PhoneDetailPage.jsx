import { useParams } from "react-router-dom"
import { useFetchData } from "../../requests/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../footer/Footer";
const PhoneDetailPage = () => {
  const { id } = useParams();
  const phone = useFetchData("/phones/", id);
  const images = {};

  phone?.photos.forEach((photo) => {
    const colorName = photo.color.name.toLowerCase(); // Convert color name to lowercase
    images[colorName] = photo.image; // Assign the image URL to the corresponding color key
  });
// const parsedMainInfo = ReactHtmlParser(phone?.main_info);
// const parsedCharacteristics = ReactHtmlParser(phone?.characteristics);
// const parsedCameraInfo = ReactHtmlParser(phone?.camera_info);
// const parsedKitInfo = ReactHtmlParser(phone?.kit_info);
// const parsedSensors = ReactHtmlParser(phone?.sensors);
  return (
    <div>
      <div className="phone-container">
        <p className="phone-detail-title">Цвета</p>
        <div className="phone-detail-content">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            className="phone-slider"
          >
            {Object.entries(images).map(([color, imageUrl]) => (
              <SwiperSlide key={color}>
                <img src={imageUrl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Основная информация</p>
        {/* <div className="phone-detail-content">{parsedMainInfo}</div> */}
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Характеристики</p>
        {/* <div className="phone-detail-content">{parsedCharacteristics}</div> */}
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Камера</p>
        {/* <div className="phone-detail-content">{parsedCameraInfo}</div> */}
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Сенсоры</p>
        {/* <div className="phone-detail-content">{parsedSensors}</div> */}
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Комплект поставки</p>
        {/* <div className="phone-detail-content">{parsedKitInfo}</div> */}
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default PhoneDetailPage