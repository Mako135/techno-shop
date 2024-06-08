import FlipSecEight from "./components/FlipSecEight";
import FlipSecEleven from "./components/FlipSecEleven";
import FlipSecFifteen from "./components/FlipSecFifteen";
import FlipSecFive from "./components/FlipSecFive";
import FlipSecFour from "./components/FlipSecFour";
import FlipSecFourteen from "./components/FlipSecFourteen";
import FlipSecNine from "./components/FlipSecNine";
import FlipSecOne from "./components/FlipSecOne";
import FlipSecSeven from "./components/FlipSecSeven";
import FlipSecSeventeen from "./components/FlipSecSeventeen";
import FlipSecSix from "./components/FlipSecSix";
import FlipSecSixteen from "./components/FlipSecSixteen";
import FlipSecTen from "./components/FlipSecTen";
import FlipSecThirteen from "./components/FlipSecThirteen";
import FlipSecThree from "./components/FlipSecThree";
import FlipSecTwelve from "./components/FlipSecTwelve";
import FlipSecTwo from "./components/FlipSecTwo";
import Footer from '../../../../components/footer/Footer';
import "./flip.css";

const Flip = () => {
  return (
    <div className="flip-container">
      <FlipSecOne />
      <FlipSecTwo />
      <FlipSecThree />
      <FlipSecFour />
      <FlipSecFive />
      <FlipSecSix />
      <FlipSecSeven />
      <FlipSecEight />
      <FlipSecNine />
      <FlipSecTen />
      <FlipSecEleven />
      <FlipSecTwelve />
      <FlipSecThirteen />
      <FlipSecFourteen />
      <FlipSecFifteen />
      <FlipSecSixteen />
      <FlipSecSeventeen />
      <Footer className="#fff"/>
    </div>
  );
};

export default Flip;
