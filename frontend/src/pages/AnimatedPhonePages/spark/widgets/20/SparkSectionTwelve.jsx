import SparkBanner from "../../components/SparkBanner";

const SparkSectionTwelve = () => {
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3PcBg.png";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3MbBg.png";
  return (
    <div className="section-ten">
      <SparkBanner
        color="transparent"
        title="Безупречные звук и видео"
        subtitle="Полное погружение"
        fontColor="linear-gradient(101.44deg, #b7b6f0 33.33%, #d0cdf6 50.52%, #9596e8 100%)"
        medium={medium}
        small={small}
      />
    </div>
  );
};

export default SparkSectionTwelve;
