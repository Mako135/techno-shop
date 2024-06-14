import ResponsivePictures from "../../components/ResponsivePictures";

const SparkSecondSection = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_pc.png";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_m.jpg";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_m.jpg";
  return (
    <div className="sec-two">
      <div className="mask"></div>
      <ResponsivePictures
        large={large}
        medium={medium}
        small={small}
        animate={true}
        color="#fff"
        padding="12.5vw 0"
      />
    </div>
  );
};


export default SparkSecondSection;
