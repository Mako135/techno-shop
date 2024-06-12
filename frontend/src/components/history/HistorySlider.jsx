import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import HistoryCard from "./HistoryCard";
import history from "../../assets/history.png";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight
} from "react-icons/md";

const HistorSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const [swiper, setSwiper] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="navigation">
        <button ref={prevRef} className="navigation-btn">
          <MdKeyboardDoubleArrowLeft fontSize={24} />
        </button>
        <button ref={nextRef} className="navigation-btn">
          <MdKeyboardDoubleArrowRight fontSize={24} />
        </button>
      </div>
      <Swiper
        spaceBetween={24}
        onSwiper={setSwiper}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.15
          },
          480: {
            slidesPerView: 1.8
          },
          624: {
            slidesPerView: 2
          },
          650: {
            slidesPerView: 2
          },
          739: {
            slidesPerView: 2.5
          },
          789: {
            slidesPerView: 2.5
          },
          967: {
            slidesPerView: 3
          },
          1120: {
            slidesPerView: 3.5
          },
          1220: {
            slidesPerView: 3.9
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide className="history-slide">
          <HistoryCard
            year="2023"
            img={history}
            title="TECNO представил свой первый вертикальный складной смартфон PHANTOM V Flip 5G в Сингапуре"
          />
        </SwiperSlide>
        <SwiperSlide className="history-slide">
          <HistoryCard
            year="2023"
            img={history}
            title="TECNO представил свой первый вертикальный складной смартфон PHANTOM V Flip 5G в Сингапуре"
          />
        </SwiperSlide>
        <SwiperSlide className="history-slide">
          <HistoryCard
            year="2023"
            img={history}
            title="TECNO представил свой первый вертикальный складной смартфон PHANTOM V Flip 5G в Сингапуре"
          />
        </SwiperSlide>
        <SwiperSlide className="history-slide">
          <HistoryCard
            year="2023"
            img={history}
            title="TECNO представил свой первый вертикальный складной смартфон PHANTOM V Flip 5G в Сингапуре"
          />
        </SwiperSlide>
        <SwiperSlide className="history-slide">
          <HistoryCard
            year="2023"
            img={history}
            title="TECNO представил свой первый вертикальный складной смартфон PHANTOM V Flip 5G в Сингапуре"
          />
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};

export default HistorSlider;
