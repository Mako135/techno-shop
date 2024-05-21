
const SectionSix = () => {
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec7Pc.mp4";
  return (
    <div className="sec-6">
      <div className="sec-6-video">
        <video src={video} muted loop autoPlay></video>
      </div>
      <div className="text-content">
        <div className="text_wrapper">
          <div className="title">Основная камера повышенной четкости 50 Мп</div>
          <div className="desc">
            Создавайте яркие кадры в любую минуту с помощью камеры 50 Мп. Днем
            или ночью режим HDR, PDAF-фокусировка и 6 светочувствительных линз
            помогут запечатлеть моменты, от которых захватывает дух
          </div>
        </div>
        <div className="params">
          <div className="param">
            <div className="title">50 Мп</div>
            <div className="desc">Основная камера</div>
          </div>
          <div className="param">
            <div className="title">1/2.8</div>
            <div className="desc">Широкая матрица</div>
          </div>
          <div className="param">
            <div className="title">6 линз</div>
            <div className="desc">Высокая светочувствительность</div>
          </div>
          <div className="param">
            <div className="title">PDAF</div>
            <div className="desc">Фазовый автофокус</div>
          </div>
          <div className="param">
            <div className="title">Режим HDR</div>
            <div className="desc">Многокадровое <br /> построение <br /> изображений</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix