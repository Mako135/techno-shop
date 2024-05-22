import PhonesAnimation from "./components/PhonesAnimation";
import WonderfulWorld from "./components/WonderfulWorld";

const SectionThree = () => {
  return (
    <div className="sec-three">
      <div className="bar"></div>
      <div className="sec-three-content">
        <div className="text">Эстетика</div>
        <div className="icon-container">
          <div className="title-2">
            Две текстуры. <br /> Один дизайн
          </div>
          <div className="icon icon-2"></div>
        </div>
        <PhonesAnimation />
        <WonderfulWorld />
      </div>
    </div>
  );
};

export default SectionThree;
