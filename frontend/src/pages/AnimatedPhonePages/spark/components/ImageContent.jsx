import { useState } from "react";
import ToggleButton from "./ToggleButton";
import PropTypes from "prop-types";

const FourSectionSecondContent = ({figure, className}) => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggle = (newState) => {
      setIsToggleOn(newState);
    };
   
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
            <h2>Режим Super Night</h2>
            <h4>Светочувствительность выше на 400%</h4>
            <p>
              Благодаря технологии объединения пикселей 4-в-1
              светочувствительность фото в режиме Super Night в четыре раза
              выше, чем в обычном режиме съемки
            </p>
          </div>
          <div className="datas">
            <div className={`data ${className}`}>
              <h1>4-в-1</h1>
              <p>Сверхчувствительный адаптивный пиксель</p>
            </div>
            <div className="data">
              <h1>1.28 мкм</h1>
              <p>Большая площадь объединенного пикселя</p>
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
FourSectionSecondContent.propTypes = {
  figure: PropTypes.string.isRequired,
  className: PropTypes.string
};


export default FourSectionSecondContent