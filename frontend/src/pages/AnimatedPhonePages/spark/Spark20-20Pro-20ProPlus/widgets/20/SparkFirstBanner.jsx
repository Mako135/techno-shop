import ResponsivePictures from "../../components/ResponsivePictures";

const SparkFirstBanner = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20/banner-%20web.jpg";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20/banner-mobile.jpg";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20/banner-mobile.jpg";
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

export default SparkFirstBanner