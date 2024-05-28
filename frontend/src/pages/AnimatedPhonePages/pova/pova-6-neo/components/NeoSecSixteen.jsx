const NeoSecSixteen = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/videos/video-4d.mp4";
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/Chapter3-7-video.webp";

  return (
    <div className="neo-16">
      <div className="neo-text">
        <div className="neo-title">4D виброотклик</div>
        <div className="neo-subtitle">
          Совместная сертификация PUBG и Tencent Lab
        </div>
        <div className="neo-desc">
          Z-осевой линейный вибромотор и жесткий гироскоп дадут еще больше
          острых ощущений от игры и повысят ваш уровень с шестью режимами
          управления
        </div>
      </div>
      <div className="neo-video-card">
        <video src={video}></video>
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default NeoSecSixteen;
