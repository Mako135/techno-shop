import SparkFirstBanner from './widgets/20/SparkFirstBanner'
import SparkSecondSection from "./widgets/20/SparkSecondSection";
import SparkThirdSection from "./widgets/20/SparkThirdSection";
import SparkSectionFour from "./widgets/20/SparkSectionFour";
import SparkSectionFive from './widgets/20/SparkSectionFive';
import SectionSix from './widgets/SectionSix';
import SparkSectionSeven from './widgets/20/SparkSectionSeven';
import SectionEight from './widgets/SectionEight';
import SparkSectionNine from './widgets/20/SparkSectionNine';
import SectionTen from './widgets/SectionTen';
import SectionFifteen from './widgets/SectionFifteen';
import Footer from '../../../../components/footer/Footer';
import SparkSectionEleven from './widgets/20/SparkSectionEleven';
import SparkSectionTwelve from "./widgets/20/SparkSectionTwelve";
import SparkSectionThirteen from "./widgets/20/SparkSectionThirteen";
import SparkSectionFourteen from "./widgets/20/SparkSectionFourteen";

const Spark20 = () => {
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/jpg/sec8PcF1.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/jpg/sec8MbF2.jpg";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/jpg/sec8PcF3.jpg";
  const figure_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/jpg/sec8PcF4.jpg";
  
  return (
    <div className="spark-container">
      <div className="bg-white">
        <SparkFirstBanner />
        <SparkSecondSection />
        <SparkThirdSection />
        <SparkSectionFour />
        <SparkSectionFive />
        <SectionSix />
        <SparkSectionSeven />
        <SectionEight
          figure_1={figure_1}
          figure_2={figure_2}
          figure_3={figure_3}
          figure_4={figure_4}
        />
        <SparkSectionNine />
      </div>
      <div className="bg_white">
        <SectionTen />
        <SparkSectionEleven />
        <SparkSectionTwelve />
        <SparkSectionThirteen />
        <SparkSectionFourteen />
        <SectionFifteen />
      </div>
      <Footer className={"#fff"} />
    </div>
  );
}

export default Spark20