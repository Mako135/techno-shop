import "./spark.css";
import PlusFirstBanner from "./widgets/20ProPlus/PlusFirstBanner";
import PlusSecondBanner from "./widgets/20ProPlus/PlusSecondBanner";
import PlusThirdSection from "./widgets/20ProPlus/PlusThirdSection";
import PlusSectionFour from "./widgets/20ProPlus/PlusSectionFour";
import SectionFive from "./widgets/SectionFive";
import PlusSectionSeven from "./widgets/20ProPlus/PlusSectionSeven";
import SectionSix from "./widgets/SectionSix";
import SectionEight from "./widgets/SectionEight";
import SectionTen from "./widgets/SectionTen";
import SectionEleven from "./widgets/SectionEleven";
import SectionTwelve from "./widgets/SectionTwelve";
import SectionThirteen from "./widgets/SectionThirteen";
import SectionFourteen from "./widgets/SectionFourteen";
import SectionFifteen from "./widgets/SectionFifteen";
import Footer from "../../../components/footer/Footer";
import PlusSectionNine from "./widgets/20ProPlus/PlusSectionNine";

const Spark20ProPlus = () => {
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec8PcColorLunarFrost.webp";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec8PcColorRadiantStarstream.webp";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec8PcColorTemporalOrbits.webp";
  const figure_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec8PcColorMagicGreen.webp";
  return (
    <div className="spark-container">
      <div className="bg-green">
        <PlusFirstBanner />
        <PlusSecondBanner />
        <PlusThirdSection />
        <PlusSectionFour />
        <SectionFive className="section-titles-2" />
        <SectionSix />
        <PlusSectionSeven />
        <SectionEight
          figure_1={figure_1}
          figure_2={figure_2}
          figure_3={figure_3}
          figure_4={figure_4}
        />
        <PlusSectionNine />
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
};

export default Spark20ProPlus;
