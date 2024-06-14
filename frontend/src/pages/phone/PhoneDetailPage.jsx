import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import usePhoneStore from "../../services/store/usePhoneStore";
import useLanguageStore from "../../services/store/useLanguageStore";
import { createSections } from "../../components/phones/Sections";
import PhoneDetailSection from "../../components/phones/ParsedDetailSection";
import { AnimatedPhonesData } from "../../services/animatedPhones/datas";

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
    <div className="phone-detail-main">
      <div className="container">
        {AnimatedPhonesData.includes(phoneId) && (
          <div className="animated-page-link">
            <a href={`/${phoneId}`} target="_blank">
              <button className="contact-button">
                Узнать больше о дизайне
              </button>
            </a>
          </div>
        )}
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
                      return `<span class="${className}" style="background-color: ${colors[index]}; width: 1rem; height: 1rem;top: 2rem;"></span>`;
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

        {sections.map(({ title, content }, index) => (
          <div key={title}>
            <PhoneDetailSection title={title} content={content} />
            <div className="divider" key={`divider-${index}`}></div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PhoneDetailPage;
