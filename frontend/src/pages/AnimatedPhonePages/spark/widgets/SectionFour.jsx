import FourSectionFirstContent from "../components/FourSectionFirstContent";
import FourSectionSecondContent from "../components/FourSectionSecondContent";

const SectionFour = () => {
  return (
    <div className="sec-content">
      <div className="section-titles">
        <p>
          <span>Сияющая красота</span>
        </p>
        <p>
          <span>при любом освещении</span>
        </p>
      </div>
      <FourSectionFirstContent />
      <FourSectionSecondContent />
    </div>
  );
};

export default SectionFour;
