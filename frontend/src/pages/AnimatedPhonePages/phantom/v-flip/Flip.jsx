import FlipSecEight from "./components/FlipSecEight";
import FlipSecEleven from "./components/FlipSecEleven";
import FlipSecFive from "./components/FlipSecFive";
import FlipSecFour from "./components/FlipSecFour";
import FlipSecNine from "./components/FlipSecNine";
import FlipSecOne from "./components/FlipSecOne";
import FlipSecSeven from "./components/FlipSecSeven";
import FlipSecSix from "./components/FlipSecSix";
import FlipSecTen from "./components/FlipSecTen";
import FlipSecThirteen from "./components/FlipSecThirteen";
import FlipSecThree from "./components/FlipSecThree";
import FlipSecTwelve from "./components/FlipSecTwelve";
import FlipSecTwo from "./components/FlipSecTwo";
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
    </div>
  );
};

export default Flip;
