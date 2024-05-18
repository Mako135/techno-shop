import ResponsivePictures from "../components/ResponsivePictures";

const SecondBanner = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec2_pc.jpg";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec2_pc.jpg";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/spark20pro/sec2_m.png";
  return (
    <section className="sec-two">
      <div className="mask"></div>
      <ResponsivePictures
        large={large}
        medium={medium}
        small={small}
        animate={true}
        color="#fff"
        padding="12.5vw 0"
      />
    </section>
  );
};

export default SecondBanner;
