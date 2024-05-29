import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NeoSecTwentyFour = () => {
    const large_slide_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sky/chapter5-4sky-pic4.webp";
    const large_slide_2 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sky/chapter5-4sky-pic3.webp";
    const large_slide_3 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sky/chapter5-4sky-pic2.webp";
    const large_slide_4 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sky/chapter5-4sky-pic1.webp";
    const small_slide_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-4sky-pic4-mb.webp";
    const small_slide_2 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-4sky-pic3-mb.webp";
    const small_slide_3 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-4sky-pic2-mb.webp";
    const small_slide_4 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-4sky-pic1-mb.webp";
  return (
    <div>
      <Swiper
        className="neo-24-swiper"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
              fadeEffect={{ crossFade: true }}
              pagination={true}
      >
        <SwiperSlide>
          <picture>
            <source media="(max-width: 768px)" srcSet={small_slide_4} />
            <img src={large_slide_4} alt="" className="neo-23-phone" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 768px)" srcSet={small_slide_3} />
            <img src={large_slide_3} alt="" className="neo-23-phone" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 768px)" srcSet={small_slide_2} />
            <img src={large_slide_2} alt="" className="neo-23-phone" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(max-width: 768px)" srcSet={small_slide_1} />
            <img src={large_slide_1} alt="" className="neo-23-phone" />
          </picture>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default NeoSecTwentyFour