const Pova5SecFour = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/section-power-machine-7854a709.png";
  return (
    <div className="pova-4">
      <div className="pova-4-content">
              <h1>ПРОБУДИ <br /> ЭНЕРГИЮ!</h1>
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
  );
};

export default Pova5SecFour;
