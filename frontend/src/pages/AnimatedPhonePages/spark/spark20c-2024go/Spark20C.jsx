import SectionOne from "./spark20c/SectionOne";
import "./spark2.css";
import SectionTwo from "./spark20c/SectionTwo";
import SectionThree from "./spark20c/SectionThree";
import SectionFour from "./spark20c/SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./spark20c/SectionSix";
import SectionSeven from "./spark20c/SectionSeven";
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
    </div>
  );
};

export default Spark20C;
