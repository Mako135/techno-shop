import FourSectionFirstContent from "../../components/FourSectionFirstContent";
import FourSectionSecondContent from "../../components/FourSectionSecondContent";

const SectionFour = () => {
   const figure =
     "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec4PcF2_3.jpg";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec4PcV1.mp4";
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
      <FourSectionFirstContent video={video} />
      <FourSectionSecondContent figure={figure} />
    </div>
  );
};

export default SectionFour;
