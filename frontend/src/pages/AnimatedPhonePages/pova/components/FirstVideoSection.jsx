
const FirstVideoSection = () => {
    const frame =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/Chapter3-7-video-a24661c5.png";
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-4d.mp4";
  return (
    <div className="video-section">
      <header>
        <h1 className="pova-title">4D виброотклик</h1>
        <h3 className="pova-subtitle">
          Совместная сертификация PUBG и Tencent Lab
        </h3>
        <p className="pova-desc">
          Z-осевой линейный вибромотор и жесткий гироскоп дадут еще больше
          острых ощущений от игры и повысят ваш уровень с шестью режимами
          управления
        </p>
      </header>
      <div
        
        style={{ position: "relative", width: "100vw", height: "46.09375vw" }}
      >
        <img
          src={frame}
          alt="Video Frame"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        <video
          src={video}
          muted
          autoPlay
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover"
          }}
        ></video>
      </div>
    </div>
  );
}

export default FirstVideoSection