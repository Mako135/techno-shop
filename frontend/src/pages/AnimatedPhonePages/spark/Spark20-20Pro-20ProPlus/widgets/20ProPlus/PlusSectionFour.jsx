import FourSectionFirstContent from "../../components/FourSectionFirstContent";
import FourSectionSecondContent from "../../components/FourSectionSecondContent";

const PlusSectionFour = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec4PcNightMode.webp";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/videos/sec4PcCamera.mp4";
  return (
    <div className="sec-content">
      <div className="section-titles-2">
        <p>
          <span>Сияющая красота при</span>
        </p>
        <p>
          <span>любом освещении</span>
        </p>
      </div>
      <FourSectionFirstContent video={video} className="blue-text" />
      <FourSectionSecondContent figure={figure} className="blue-text" />
    </div>
  );
};

export default PlusSectionFour;
