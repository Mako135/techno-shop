import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Pova5SecNineteen = () => {
  const large_slide_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/sky-1-sunny-5a898211.jpg";
  const large_slide_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/sky-2-sunset-7e6e27a3.jpg";
  const large_slide_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/sky-3-aurora-3f9ae62b.jpg";
  const large_slide_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/sky-4-starry-ddd3fb55.jpg";
  return (
    <div className="sec-19">
      <div className="pova-text">
        <h1>ВЫБЕРИ СВОЕ НЕБО</h1>
        <h3>Настоящая магия в твоих руках</h3>
        <p>
          12 вариантов невероятно красивых небесных фильтров, которые сделают
          любое фото <br /> уникальным. <br /> Замени небо одним касанием.
        </p>
      </div>
      <Swiper
        className="sec-19-swiper"
        slidesPerView={1}
        effect="fade"
        loop={true}
        modules={[EffectFade]}
      >
        <SwiperSlide>
          <img src={large_slide_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={large_slide_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={large_slide_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={large_slide_1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Pova5SecNineteen;
