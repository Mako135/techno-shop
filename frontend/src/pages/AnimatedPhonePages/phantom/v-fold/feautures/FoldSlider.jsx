const FoldSlider = () => {
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/01.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/02.jpeg";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/03.jpg";
  const figure_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/04.jpg";
  const figure_5 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/05.jpg";
  return (
    <div className="fold-slider">
      <div className="fold-slider-container slide_1">
        <img src={figure_1} alt="" />
      </div>
      <div className="fold-slider-container slide_2">
        <img src={figure_2} alt="" />
      </div>
      <div className="fold-slider-container slide_3">
        <img src={figure_3} alt="" />
      </div>
      <div className="fold-slider-container slide_4">
        <img src={figure_4} alt="" />
      </div>
      <div className="fold-slider-container slide_5">
        <img src={figure_5} alt="" />
      </div>
    </div>
  );
};

export default FoldSlider;
