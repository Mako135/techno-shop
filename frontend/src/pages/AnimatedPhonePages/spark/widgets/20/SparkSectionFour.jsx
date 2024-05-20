import ImageContent from "../../components/ImageContent";

const SectionFour = () => {
   const figure =
     "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec4PcF2_3.jpg";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/video/sec4PcV1.mp4";
  return (
    <div className="sec-content">
      <div className="section-titles-3">
        <p>
          <span>Сияющая красота</span>
        </p>
        <p>
          <span>при любом освещении</span>
        </p>
      </div>

      <div className="section-spark-content">
        <header>
          <video src={video} muted autoPlay loop></video>
          <div className="section-right right-9">
            <h2 className="section-right-title">
              Камера высокой четкости 50 Мп
            </h2>
            <p className="section-right-subtitle">Ваши самые красивые снимки</p>
            <p className="section-right-desc mt">
              Одно легкое нажатие - и классный снимок у вас! Основная камера с
              высоким разрешением 50 Мп, широкой диафрагмой f/1.6 и поддержкой
              HDR позволяет делать четкие снимки с повышенной глубиной резкости.
              Режим Ultra Clarity придает фото еще больше естественности и
              реалистичности. Удивительное качество каждого кадра!
            </p>
            <div className="datas">
              <div className="data">
                <h1>50 Мп</h1>
                <p>Высокая четкость</p>
              </div>
              <div className="data">
                <h1>f/1.6</h1>
                <p>Широкая диафрагма</p>
              </div>
              <div className="data">
                <h1>Двойная подсветка</h1>
                <p>Усиленная яркость</p>
              </div>
              <div className="data">
                <h1>HDR</h1>
                <p>Мультикадровая съемк</p>
              </div>
              <div className="data">
                <h1>Супервспышка</h1>
                <p>Снижение шумов</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <ImageContent figure={figure} />
    </div>
  );
};

export default SectionFour;
