import SparkBanner from "../../components/SparkBanner";

const ThirdSection = () => {
    const medium =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3PcBg.png";
    const small =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3MbBg.png";
  return (
    <div className="sec-content">
      <SparkBanner
        color="#000"
        title="Камера"
        subtitle="Съемка в высоком разрешении"
        fontColor="linear-gradient(90deg, #eba9d9 0%, #fdedcf 53%, #f5dbff 100%)"
        medium={medium}
        small={small}
      />
    </div>
  );
};

export default ThirdSection;
