import ResponsivePictures from "../../components/ResponsivePictures";

const PlusFirstBanner = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/pc_kv1.jpg";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/mob_kv1.jpg";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/mob_kv1.jpg";
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

export default PlusFirstBanner;