import { Swiper, SwiperSlide } from "swiper/react";

const Pova5SecTwentyFive = () => {
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/20230804-logo-9c96fbb4.mp4";
  return (
    <div className="sec-25">
      <div className="pova-text">
        <h1>GAME SPACE 2.0</h1>
        <h3>Наслаждайся игрой</h3>
        <p>
          Обновленный интерфейс. Мгновенное переключение режимов. Улучшение
          производительности с помощью новой радарной диаграммы.{" "}
        </p>
      </div>
      <video src={video} muted autoPlay loop></video>
    </div>
  );
};

export default Pova5SecTwentyFive;
