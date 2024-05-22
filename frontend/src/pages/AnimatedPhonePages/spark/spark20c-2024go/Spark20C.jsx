import SectionOne from "./spark20c/SectionOne";
import "./spark2.css";
import SectionTwo from "./spark20c/SectionTwo";
import SectionThree from "./spark20c/SectionThree";
import SectionFour from "./spark20c/SectionFour";
import SectionFive from "./spark20c/SectionFive";
import SectionSix from "./spark20c/SectionSix";
import SectionSeven from "./spark20c/SectionSeven";
import SectionEight from "./spark20c/SectionEight";
import SectionNine from "./spark20c/SectionNine";
import SectionTen from "./spark20c/SectionTen";
import SectionEleven from "./spark20c/SectionEleven";
import SectionTwelve from "./spark20c/SectionTwelve";
const Spark20C = () => {
  return (
    <div className="spark-container-2">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className="bg_wrapper">
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </div>
      <div className="bg_purple">
        <div className="bar"></div>

        <SectionEight />
        <SectionNine />
        <SectionTen />
        <SectionEleven />
        <SectionTwelve />
      </div>
    </div>
  );
};

export default Spark20C;
