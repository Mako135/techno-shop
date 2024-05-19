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
      <SectionTen />
      <SectionEleven />
    </div>
  );
}

export default Spark20Pro