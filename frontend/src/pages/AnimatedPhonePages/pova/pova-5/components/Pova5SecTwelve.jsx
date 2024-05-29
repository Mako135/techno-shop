import arrow from "../assets/arrow.png";

const Pova5SecTwelve = () => {
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/video-border-sm-07f4e882.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-lh7n-cpu-v2.mp4";
  return (
    <div className="pova-sec-12">
      <div className="pova-text">
        <h1>256 ГБ ПЗУ + 8 ГБ ОЗУ (РАСШИРЕНИЕ ОПЕРАТИВНОЙ ПАМЯТИ ДО 16 ГБ)</h1>
        <p>Просторное хранилище для фото, видео и других файлов</p>
        <ul>
          <li>
            <img src={arrow} alt="" className="left-icon_1" />
            <div>
              <p>На 67%</p>
              <span>быстрее запуск приложений</span>
            </div>
          </li>
          <li>
            <img src={arrow} alt="" className="left-icon_1" />
            <div>
              <p>25</p>
              <span>
                приложений могут работать в фоновом режиме одновременно
              </span>
            </div>
          </li>
          <li>
            <img src={arrow} alt="" className="left-icon_1" />
            <div>
              <p>На 39%</p>
              <span>увеличилась скорость загрузки приложений</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="right-video-card">
        <img src={frame} alt="" />
        <video src={video}></video>
      </div>
    </div>
  );
};

export default Pova5SecTwelve;
