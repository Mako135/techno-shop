import FirstBanner from "./widgets/FirstBanner"
import SecondBanner from "./widgets/SecondBanner"
import SectionFive from "./widgets/SectionFive";
import SectionFour from "./widgets/SectionFour";
import ThirdSection from "./widgets/ThirdSection";
import './spark.css'
import SectionSix from "./widgets/SectionSix";
import SectionSeven from "./widgets/SectionSeven";
import SectionEight from "./widgets/SectionEight";
import SectionNine from "./widgets/SectionNine";
import SectionTen from "./widgets/SectionTen";
import SectionEleven from "./widgets/SectionEleven";
import SectionTwelve from "./widgets/SectionTwelve";
import SectionThirteen from "./widgets/SectionThirteen";
import SectionFourteen from "./widgets/SectionFourteen";
import SectionFifteen from "./widgets/SectionFifteen";
import Footer from '../../../components/footer/Footer'


const Spark20Pro = () => {
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
        <SectionEight />
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
      <Footer className={"#fff"}/>
    </div>
  );
}

export default Spark20Pro