import pova_pro from "./assets/pova_pro.png";
import pova_second from "./assets/pova_second.png";
import "./pova.css";
import Feautures from "./components/Feautures";
import Design from "./components/Design";
import VideoCard from "./components/VideoCard";
import DesignSection from "./components/DesignSection";
import BatterySection from "./components/BatterySection";
import BodySection from "./components/BodySection";
import ColorSection from "./components/ColorSection";
import ScrollFade from "./components/ScrollFade";


const Pova6Pro = () => {
  const firstVideo =
    "https://d3fyizz0b46qgr.cloudfront.net/global/POVA-60S/POVA-60S.mp4";
  const secondVideo =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/pova6-5g/powg-4k-li7-v2.mp4";
  
  return (
    <div className="pova-container">
      <img src={pova_pro} alt="" className="pova-banner" />
      <img src={pova_second} alt="" className="pova-banner" />
      <Feautures />
      <Design />
      <VideoCard src={firstVideo} />
      <DesignSection />
      <BatterySection />
      <BodySection />
      <VideoCard src={secondVideo} />
      <ColorSection />
      <ScrollFade />
      <ColorSection />
    </div>
  );
};

export default Pova6Pro;
