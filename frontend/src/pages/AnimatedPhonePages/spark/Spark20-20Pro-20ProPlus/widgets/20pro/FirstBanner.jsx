import ResponsivePictures from "../../components/ResponsivePictures";

const FirstBanner = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec1_pc.png";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec1_pc.png";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec1_m.png";
  return (
    <div>
      <ResponsivePictures
        large={large}
        medium={medium}
        small={small}
        animate={false}
      />
    </div>
  );
};

export default FirstBanner;
