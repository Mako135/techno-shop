import SparkBanner from "../components/SparkBanner";

const SectionSix = () => {
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec6PcBg.png";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec6MbBg.png";
  return (
    <div className="sec-content2">
      <SparkBanner
        color="transparent"
        title="Дизайн"
        subtitle="Создан для стиля"
        fontColor="#000"
        medium={medium}
        small={small}
      />
    </div>
  );
}

export default SectionSix