import SparkBanner from "../components/SparkBanner";

const SectionTen = () => {
    const medium =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3PcBg.png";
    const small =
      "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec3MbBg.png";
  return (
    <div className="section-ten">
      <SparkBanner
        color="transparent"
        title="Производительность"
        subtitle="Быстрая и плавная работа"
        fontColor="linear-gradient(90deg, #0160aa 0%, #45a4ce 36%, #77d5e8 65%, #a2ffff 100%)"
        medium={medium}
        small={small}
      />
    </div>
  );
}

export default SectionTen