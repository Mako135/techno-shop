import { useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";

const SectionFiveThirdCard = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const videoRef = useRef(null);

  const handleToggle = (newState) => {
    setIsToggleOn(newState);
  };

  useEffect(() => {
    if (isToggleOn) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [isToggleOn]);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec5PcV3.mp4";
  const icon =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec5PcIcon4.png";

  return (
    <div className="spark-content">
      <div className="right-2">
        <img
          src={icon}
          alt=""
          className="right-2-icon"
          style={{ height: "20.3125vw", width: "auto", right: 0, bottom: 0 }}
        />
        <div className="text_wrapper">
          <h2>Супервспышка</h2>
          <h4>Осветите весь мир</h4>
          <p>
            Делайте селфи даже в темноте. Когда вспышка осветляет фон, алгоритм
            Super Flash создает 8 кадров экспозиции, чтобы улучшить качество
            фото. Благодаря вспышке и искусственному интеллекту, вы получите
            яркие и детализированные селфи
          </p>
        </div>
        <div>
          <ToggleButton onToggle={handleToggle} />
        </div>
      </div>
      <video ref={videoRef} src={video} className="left-2"></video>
    </div>
  );
}

export default SectionFiveThirdCard