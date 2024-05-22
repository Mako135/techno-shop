import SparkBanner from "../../components/SparkBanner";

const SparkThirdSection = () => {
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
        fontColor="linear-gradient(92.78deg, #7ad0e0 0%, #e5f5b6 80.41%)"
        medium={medium}
        small={small}
      />
    </div>
  );
};

export default SparkThirdSection;
