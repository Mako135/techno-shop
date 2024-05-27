import FoldSecEight from "./components/FoldSecEight";
import FoldSecFive from "./components/FoldSecFive";
import FoldSecFour from "./components/FoldSecFour";
import FoldSecOne from "./components/FoldSecOne";
import FoldSecSeven from "./components/FoldSecSeven";
import FoldSecSix from "./components/FoldSecSix";
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
    </div>
  );
};

export default Fold;
