import SparkBanner from "../components/SparkBanner";

const SectionTwelve = () => {
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
        fontColor="linear-gradient(90deg, #ffd67c 0%, #ffd987 10%, #ffe1a6 27%, #fff0d8 50%, #feecd1 55%, #fde2be 62%, #fcd29f 70%, #fabc73 80%, #f8a03d 90%, #f68100 100%)"
        medium={medium}
        small={small}
      />
      
    </div>
  );
};

export default SectionTwelve;
