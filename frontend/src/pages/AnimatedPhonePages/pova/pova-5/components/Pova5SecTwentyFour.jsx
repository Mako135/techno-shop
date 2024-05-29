
const Pova5SecTwentyFour = () => {

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-aurora-engine.mp4";
  return (
    <div className="sec-24">
      <div className="pova-14">
        <div className="pova-text">
          <h1>AURORA ENGINE</h1>
          <br />
          <p>
            Абсолютно новый движок Aurora Engine использует искусственный
            интеллект для молниеносного запуска самых требовательных игр.
            Скорость загрузки текстур увеличилась на 85%. Наслаждайся
            детализированным и плавным геймплеем. Скорость запуска других
            приложений увеличилась на 95%. Теперь смартфон стал максимально
            эффективен.
          </p>
        </div>
        <div className="right-video-card">
          <video src={video} muted autoPlay loop></video>
        </div>
        <div className="pova-2-bottom"></div>
      </div>
    </div>
  );
};
export default Pova5SecTwentyFour