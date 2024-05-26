import ContentSection from "./ContentSection";
import { Autoplay, EffectFade } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
const ScrollAndVideoSection = () => {
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-top-1acf1427.jpg";
  const background_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-border-7f4329ff.jpg";
  const first_slide =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-pic1-96ac20b7.jpg";
  const second_slide =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-pic2-e3aa01c0.jpg";
  const third_slide =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-pic3-d2ec93a7.jpg";
  const fourth_slide =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-4sky-pic4-87c9f178.jpg";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-dual.mp4";
  return (
    <ContentSection backImg={background} backPos="top">
      <div className="scroll-video-container">
        <h1 className="pova-title">Новые горизонты</h1>
        <h3 className="pova-subtitle">для искушенных фотографов</h3>
      </div>
      <h1 style={{ margin: "auto" }}> Выбор неба</h1>
      <ContentSection backImg={background_2} backPos="center">
        <div className="scroll-slide-container">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            effect="fade"
            modules={[Autoplay, EffectFade]}
            fadeEffect={{ crossFade: true }}
            className="scroll-slider"
          >
            <SwiperSlide>
              <img src={first_slide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={second_slide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={third_slide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={fourth_slide} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="scroll-slider-footer">
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/icon-border-86fe8a4e.png"
              alt=""
            />
            <p>
              Создавайте уникальные снимки, заменив скучное небо на один из 12
              сказочных фильтров
            </p>
          </div>
        </div>
        <div className="double-video">
          <header>
            <h1 style={{ margin: "5vw" }}>Двойное</h1>
            <video src={video}></video>
            <h1 style={{ margin: "25vw 5vw 0"  }}>видео</h1>
          </header>
          <p>
            Снимайте необычные видео на основную и фронтальную <br />
            камеру одновременно
          </p>
        </div>
      </ContentSection>
    </ContentSection>
  );
};

export default ScrollAndVideoSection;
