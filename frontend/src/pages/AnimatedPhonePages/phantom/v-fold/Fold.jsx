import FoldSecEight from "./components/FoldSecEight";
import FoldSecFive from "./components/FoldSecFive";
import FoldSecFour from "./components/FoldSecFour";
import FoldSecNine from "./components/FoldSecNine";
import FoldSecOne from "./components/FoldSecOne";
import FoldSecSeven from "./components/FoldSecSeven";
import FoldSecSix from "./components/FoldSecSix";
import FoldSecTen from "./components/FoldSecTen";
import FoldSecThree from "./components/FoldSecThree";
import FoldSecTwo from "./components/FoldSecTwo";
import "./fold.css";
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
    </div>
  );
};

export default Fold;
