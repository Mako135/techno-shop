
const FlipSecFourteen = () => {
    const logo =
      "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/footerSection/HiOS.png";
    const banner_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/footerSection/line2.png";
    const banner_2 = "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/footerSection/line1.png"
    const banner_3 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/footerSection/line3.png";
  return (
    <div className="flip-14">
      <div className="mask"></div>
      <img src={logo} alt="" className="flip-14-logo" />

      <div className="flip-14-loop">
        <div className="flip-banner">
          <div className="flip-banner-content">
            <img src={banner_1} alt="Banner" />
            <img src={banner_1} alt="Banner" />
            <img src={banner_1} alt="Banner" />
          </div>
        </div>
        <div className="flip-banner">
          <div className="flip-banner-content-2">
            <img src={banner_2} alt="Banner" />
            <img src={banner_2} alt="Banner" />
            <img src={banner_2} alt="Banner" />
          </div>
        </div>
        <div className="flip-banner">
          <div className="flip-banner-content">
            <img src={banner_3} alt="Banner" />
            <img src={banner_3} alt="Banner" />
            <img src={banner_3} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipSecFourteen