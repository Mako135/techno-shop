
const Pova5SecTwentyOne = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/card-hiso13-b0493b47.png";
  return (
    <div className="sec-21">
      <div className="pova-4">
        <div className="pova-4-content">
          <h1>
            HiOS 13 <br /> НОВЫЕ <br /> ВОЗМОЖНОСТИ. <br />
            НОВЫЙ ОПЫТ
          </h1>
          <img src={figure} alt="" />
        </div>
        <picture className="bg-plan">
          <source
            media="(min-width: 1080px)"
            srcSet="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/common-block-069d2d6a.png"
          ></source>
          <img
            className="bg-plan"
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/common-block-m-4a3dd120.png"
          />
        </picture>
      </div>
    </div>
  );
};
export default Pova5SecTwentyOne