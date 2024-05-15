


const FirstSection = () => {
    const background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/home-section/ru/backgroundMinPcCL6RU.jpg";
    const banner =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/highlightSection/cl6Ru.jpg";
  return (
    <div className="common-first-section">
      <img src={background} alt="" className="first-section-banner_1" />
      <img src={banner} alt="" className="first-section-banner_2" />
    </div>
  );
}

export default FirstSection