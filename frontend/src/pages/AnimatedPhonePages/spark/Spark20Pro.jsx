import FirstBanner from "./widgets/FirstBanner"
import SecondBanner from "./widgets/SecondBanner"
import SectionFive from "./widgets/SectionFive";
import SectionFour from "./widgets/SectionFour";
import ThirdSection from "./widgets/ThirdSection";
import './spark.css'
import SectionSix from "./widgets/SectionSix";
const Spark20Pro = () => {
  return (
    <div className="spark-container">
      <FirstBanner />
      <SecondBanner />
      <ThirdSection />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default Spark20Pro