import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NeoSecThree = () => {
  const silver_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/White/01.webp";
  const silver_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/White/02.webp";
  const silver_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/White/03.webp";
  const silver_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/White/04.webp";
  const black_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Grey/01.webp";
  const black_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Grey/02.webp";
  const black_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Grey/03.webp";
  const black_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Grey/04.webp";
  const green_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Green/01.webp";
  const green_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Green/02.webp";
  const green_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Green/03.webp";
  const green_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/Green/04.webp";

  return (
    <div className="neo-3">
      <Swiper
        className="neo-fade-swiper"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        modules={[Autoplay, EffectFade]}
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <span>Серебристый спутник </span>
          <div className="corner-image">
            <img src={silver_1} alt="" />
          </div>
          <div className="corner-image">
            <img src={silver_2} alt="" />
          </div>
          <div className="corner-image">
            <img src={silver_3} alt="" />
          </div>
          <div className="corner-image">
            <img src={silver_4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>Черный астероид </span>

          <div className="corner-image">
            <img src={black_1} alt="" />
          </div>
          <div className="corner-image">
            <img src={black_2} alt="" />
          </div>
          <div className="corner-image">
            <img src={black_3} alt="" />
          </div>
          <div className="corner-image">
            <img src={black_4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>Зеленая комета </span>

          <div className="corner-image">
            <img src={green_1} alt="" />
          </div>
          <div className="corner-image">
            <img src={green_2} alt="" />
          </div>
          <div className="corner-image">
            <img src={green_3} alt="" />
          </div>
          <div className="corner-image">
            <img src={green_4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NeoSecThree;
