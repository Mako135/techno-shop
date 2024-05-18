import { useState } from "react";
import ToggleButton from "./ToggleButton";

const FourSectionSecondContent = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggle = (newState) => {
      setIsToggleOn(newState);
    };
    const figure =
        "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec4PcF2_3.jpg";
    const icon =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec4PcF3.png";
  return (
    <div className="spark-margin">
      <div className="spark-content">
        <img
          src={figure}
          alt=""
          className={`left-2 ${isToggleOn ? "image-off" : ""}`}
        />
        <div className="right-2">
          <img src={icon} alt="" className="right-2-icon" />
          <div className="text_wrapper">
            <h2>Сверхчувствительный адаптивный пиксель</h2>
            <h4>Режим Super Night стал на 900% эффективнее </h4>
            <p>
              Снимайте яркие фото даже глубокой ночью! Технология объединения
              пикселей 9-в-1 при съемке в темное время суток помогает улавливать
              на 900% больше света по сравнению с моделями SPARK предыдущего
              поколения. Режим Ultra Night снижает шумы и улучшает детализацию.
              Наслаждайтесь красотой ночных фотографий
            </p>
          </div>
          <div className="datas">
            <div className="data">
              <h3>9-в-1</h3>
              <p>система адаптивного пикселя</p>
            </div>
            <div className="data">
              <h3>2.1 мкм</h3>
              <p>размер пикселя</p>
            </div>
          </div>
          <div className="div">
            <ToggleButton onToggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourSectionSecondContent