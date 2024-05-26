import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../footer/Footer";
import parse from "html-react-parser";
import { useEffect } from "react";
import usePhoneStore from "../../store/usePhoneStore";
import useLanguageStore from "../../store/useLanguageStore";

const PhoneDetailPage = () => {
  const { id } = useParams();
  const { phone, loading, error, fetchPhoneById } = usePhoneStore();
  
const { language } = useLanguageStore();
  useEffect(() => {
    fetchPhoneById(id);
  }, [id, fetchPhoneById, language]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  const images = {};

  phone?.photos.forEach((photo) => {
    const colorName = photo.color.name.toLowerCase();
    images[colorName] = photo.image;
  });

  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;

  const parsedMainInfo = safeParse(phone?.main_info);
  const parsedCharacteristics = safeParse(phone?.characteristics);
  const parsedCameraInfo = safeParse(phone?.camera_info);
  const parsedKitInfo = safeParse(phone?.kit_info);
  const parsedSensors = safeParse(phone?.sensors);

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
                <img src={imageUrl} alt={color} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Основная информация</p>
        <div className="phone-detail-content">{parsedMainInfo}</div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Характеристики</p>
        <div className="phone-detail-content">{parsedCharacteristics}</div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Камера</p>
        <div className="phone-detail-content">{parsedCameraInfo}</div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Сенсоры</p>
        <div className="phone-detail-content">{parsedSensors}</div>
      </div>
      <div className="divider"></div>
      <div className="phone-container">
        <p className="phone-detail-title">Комплект поставки</p>
        <div className="phone-detail-content">{parsedKitInfo}</div>
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default PhoneDetailPage;
