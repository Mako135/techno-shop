import FoldSecEight from "./components/FoldSecEight";
import FoldSecEleven from "./components/FoldSecEleven";
import FoldSecFifteen from "./components/FoldSecFifteen";
import FoldSecFive from "./components/FoldSecFive";
import FoldSecFour from "./components/FoldSecFour";
import FoldSecFourteen from "./components/FoldSecFourteen";
import FoldSecNine from "./components/FoldSecNine";
import FoldSecOne from "./components/FoldSecOne";
import FoldSecSeven from "./components/FoldSecSeven";
import FoldSecSix from "./components/FoldSecSix";
import FoldSecTen from "./components/FoldSecTen";
import FoldSecThree from "./components/FoldSecThree";
import FoldSecTwelve from "./components/FoldSecTwelve";
import FoldSecTwo from "./components/FoldSecTwo";
import FoldSectionThirteen from "./components/FoldSectionThirteen";
import "./fold.css";
import Footer from '../../../../components/footer/Footer'
const Fold = () => {
  return (
    <div>
      <FoldSecOne />
      <FoldSecTwo />
      <FoldSecThree />
      <FoldSecFour />
      <FoldSecFive />
      <FoldSecSix />
      <FoldSecSeven />
      <FoldSecEight />
      <FoldSecNine />
      <FoldSecTen />
      <FoldSecEleven />
      <FoldSecTwelve />
      <FoldSectionThirteen />
      <FoldSecFourteen />
      <FoldSecFifteen />
      <div className="container">
        <div className="divider"></div>
      </div>
      <Footer className={"#fff"} />
    </div>
  );
};

export default Fold;
