const FoldSecTwelve = () => {
  const video_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/charger.mp4";
  const video_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/fingerprint.mp4";
  const video_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/audio.mp4";
  return (
    <div className="fold-12">
      <div className="fold-12-cards">
        <div className="fold-12-card card-1">
          <video src={video_1} muted autoPlay loop></video>
          <div className="fold-card-bottom-section">
            <div className="fold-title">
              Энергоемкий аккумулятор 5000 мАч <br /> и быстрая зарядка 45Вт
            </div>
            <div className="fold-subtitle">
              Заряжается на 40% за 15 минут, <br />
              для полной зарядки достаточно 55 минут
            </div>
          </div>
        </div>
        <div className="fold-12-card card-2">
          <div className="fold-card-header-section">
            <div className="fold-title">
              Боковой сканер <br /> отпечатков пальцев
            </div>
            <div className="fold-subtitle">
              Сканер отпечатков пальцев встроен в кнопку включения смартфона.
              Разблокируйте устройство одним привычным нажатием.
            </div>
          </div>
          <video src={video_2} muted autoPlay loop></video>
        </div>
        <div className="fold-12-card card-3">
          <video src={video_3} muted autoPlay loop></video>
          <div className="fold-card-bottom-section">
            <div className="fold-title">
              Два <br /> стереодинамика
            </div>
            <div className="fold-subtitle">
              Почувствуйте всю <br />
              магию стереозвука высокого разрешения
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldSecTwelve;
