import first from "../assets/1.png";
import second from "../assets/2.png";

const FourthVideoSection = () => {
  const background = "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-3Display-end-91545eb1.jpg"
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-3Display-video-4bd319ee.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-c4-3.mp4";
  return (
    <div className="video-section">
      <header>
        <h1 className="pova-title">
          Сканер отпечатка пальца встроенный в экран
        </h1>
        <h3 className="pova-subtitle">Мгновенная разблокировка</h3>
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
      <footer
        className="video-footer"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <ul className="footer-list">
          <li>
            <img src={first} alt="" />
            <div className="list-content">
              <h2>
                Высокая <br /> скорость <br /> реакции
              </h2>
              <p className="pova-desc">
                на прикосновение: всего 0.28 мс <br /> с точностью распознавания
                99.8%
              </p>
            </div>
          </li>
          <li>
            <img src={second} alt="" />
            <div className="list-content">
              <h2>
                Разблокировка <br /> мокрыми <br /> руками
              </h2>
              <p className="pova-desc">
                Вероятность срабатывания <br /> более 95%
              </p>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FourthVideoSection;
