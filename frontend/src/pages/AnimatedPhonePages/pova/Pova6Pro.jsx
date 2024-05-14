import pova_pro from "./assets/pova_pro.png";
import pova_second from "./assets/pova_second.png";
import "./pova.css";
import Feautures from "./components/Feautures";
import VideoCard from "./components/VideoCard";
import DesignSection from "./components/DesignSection";
import BatterySection from "./components/BatterySection";
import BodySection from "./components/BodySection";
import ColorSection from "./components/ColorSection";
import ScrollFade from "./components/ScrollFade";
import SecondContent from "./components/SecondContent";
import FirstContent from "./components/FirstContent";
import SecondBatterySection from "./components/SecondBatterySection";
import ChargeSection from "./components/ChargeSection";
import ChargeSecondSection from "./components/ChargeSecondSection";
import ChargeThirdSection from "./components/ChargeThirdSection";
import FourthBatterySection from "./components/FourthBatterySection";
import WaterSave from "./components/WaterSave";
import GamePerfomance from "./components/GamePerfomance";
import Ramka from "./components/Ramka";
import Certificate from "./components/Certificate";
import SpeedPerfomance from "./components/SpeedPerfomance";
import AudioSection from "./components/AudioSection";
import FirstVideoSection from "./components/FirstVideoSection";
import SecondVideoSection from "./components/SecondVideoSection";
import SecondAudioSection from "./components/SecondAudioSection";
import ThirdSection from "./components/ThirdSection";
import ThirdVideoSection from "./components/ThirdVideoSection";
import FourthVideoSection from "./components/FourthVideoSection";
import WaterProof from "./components/WaterProof";
import FourthSection from "./components/FourthSection";
import FifthVideoSection from "./components/FifthVideoSection";
import SixthVideoSection from "./components/SixthVideoSection";
import PhotoCards from "./components/PhotoCards";
import ScrollAndVideoSection from "./components/ScrollAndVideoSection";
import CameraSection from "./components/CameraSection";
import FifthSection from "./components/FifthSection";
import WallpaperSection from "./components/WallpaperSection";
import SecondDesignSection from "./components/SecondDesignSection";
import SecondGameSection from "./components/SecondGameSection";
import SearchSection from "./components/SearchSection";
import PortSection from "./components/PortSection";
import LastSection from "./components/LastSection";
import Footer from "../../../components/footer/Footer";

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
      <FirstContent />
      <VideoCard src={firstVideo} />
      <DesignSection />
      <BatterySection />
      <BodySection />
      <VideoCard src={secondVideo} />
      <ColorSection />
      <ScrollFade />
      <SecondContent />
      <SecondBatterySection />
      <ChargeSection />
      <ChargeSecondSection />
      <ChargeThirdSection />
      <FourthBatterySection />
      <WaterSave />
      <GamePerfomance />
      <Ramka />
      <Certificate />
      <SpeedPerfomance />
      <AudioSection />
      <FirstVideoSection />
      <SecondVideoSection />
      <SecondAudioSection />
      <ThirdSection />
      <ThirdVideoSection />
      <FourthVideoSection />
      <WaterProof />
      <FourthSection />
      <FifthVideoSection />
      <img
        src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-2pic-6323795a.jpg"
        width={"100%"}
        alt=""
      />
      <SixthVideoSection />
      <PhotoCards />
      <ScrollAndVideoSection />
      <CameraSection />
      <FifthSection />
      <WallpaperSection />
      <SecondDesignSection />
      <SecondGameSection />
      <SearchSection />
      <PortSection />
      <LastSection />
      <Footer className={"white"}/>
    </div>
  );
};

export default Pova6Pro;
