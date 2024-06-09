import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import usePhoneStore from "../../services/store/usePhoneStore";
import useLanguageStore from "../../services/store/useLanguageStore";
import { createSections } from "./Sections";
import PhoneDetailSection from "./ParsedDetailSection";
const PhoneDetailPage = () => {
  const { phoneId } = useParams();
  const { phone, loading, error, fetchPhoneById } = usePhoneStore();
  const { language } = useLanguageStore();

  useEffect(() => {
    fetchPhoneById(phoneId);
  }, [phoneId, fetchPhoneById, language]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  const images = {};
  phone?.photos.forEach((photo) => {
    const colorName = photo.color.color.toLowerCase();
    images[colorName] = photo.image;
  });
  console.log(images);
  const sections = createSections(phone);

  return (
    <div>
      <div className="phone-container">
        <p className="phone-detail-title">Цвета</p>
        <div className="phone-detail-content">
          <div className="phone-detail-slider">
            {images && (
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    const colors = Object.keys(images);
                    return `<span class="${className}" style="background-color: ${colors[index]}; width: 1.5rem; height: 1.5rem; float:left"></span>`;
                  }
                }}
              >
                {Object.entries(images).map(([color, imageUrl]) => (
                  <SwiperSlide key={color}>
                    <img src={imageUrl} alt={color} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>

      {sections.map(({ title, content }) => (
        <>
          <PhoneDetailSection key={title} title={title} content={content} />
          <div className="divider"></div>
        </>
      ))}

      <Footer />
    </div>
  );
};

export default PhoneDetailPage;
