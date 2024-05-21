const SectionFiveSecondCard = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec5PcF4.jpg";
  const icon =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec5PcIcon4.png";
  const toTop =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec5PcArrowTop.png";
  const toBottom =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec5PcArrowTop.png";
  
  return (
    <div className="spark-content">
      <img src={figure} alt="" className="left-2" />
      <div className="right-2">
        <img
          src={icon}
          alt=""
          className="right-2-icon"
          style={{
            height: "20.3125vw",
            width: "auto",
            right: 0,
            bottom: 0
          }}
        />
        <div className="text_wrapper">
          <h2>Двойное видео</h2>
          <h4>Снимайте сразу на обе камеры!</h4>
          <p>
            Создавайте крутые ролики на основную и фронтальную камеру
            одновременно в режиме Двойное видео. Воплощайте творческие идеи в
            новом жанре!
          </p>
        </div>

        <div className="slide-btn">
          <img src={toTop} alt="" />
          <img src={toBottom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionFiveSecondCard;
