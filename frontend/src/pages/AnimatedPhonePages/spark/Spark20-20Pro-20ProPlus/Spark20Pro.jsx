import FirstBanner from "./widgets/20pro/FirstBanner"
import SecondBanner from "./widgets/20pro/SecondBanner";
import SectionFive from "./widgets/SectionFive";
import SectionFour from "./widgets/20pro/SectionFour";
import ThirdSection from "./widgets/20pro/ThirdSection";
import './spark.css'
import SectionSix from "./widgets/SectionSix";
import SectionSeven from "./widgets/20pro/SectionSeven";
import SectionEight from "./widgets/SectionEight";
import SectionNine from "./widgets/20pro/SectionNine";
import SectionTen from "./widgets/SectionTen";
import SectionEleven from "./widgets/SectionEleven";
import SectionTwelve from "./widgets/SectionTwelve";
import SectionThirteen from "./widgets/SectionThirteen";
import SectionFourteen from "./widgets/SectionFourteen";
import SectionFifteen from "./widgets/SectionFifteen";
import Footer from '../../../../components/footer/Footer'
import { useEffect } from "react";


const Spark20Pro = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("pageReloaded")) {
      sessionStorage.setItem("pageReloaded", "true");
      location.reload();
    }
  }, []);
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF1.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF2.jpg";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF3.jpg";
  const figure_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec8PcF4.jpg";
  return (
    <div className="spark-container">
      <FirstBanner />
      <SecondBanner />
      <div className="bg-green">
        <ThirdSection />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight
          figure_1={figure_1}
          figure_2={figure_2}
          figure_3={figure_3}
          figure_4={figure_4}
        />
        <SectionNine />
      </div>
      <div className="bg_white2">
        <SectionTen />
        <SectionEleven />
        <SectionTwelve />
        <SectionThirteen />
        <SectionFourteen />
        <SectionFifteen />
      </div>
      <Footer className={"#fff"} />
    </div>
  );
}

export default Spark20Pro