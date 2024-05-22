
const SectionOne = () => {
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec1PcType2.mp4";
  return (
    <div className="c-one">
      <video src={video} muted autoPlay loop></video>
      <div className="c-one-content">
        <div className="spark-slogan"></div>
        <div className="icon_container">
          <div className="title-1">Быстрее. Лучше. Ярче</div>
          <div className="c-icon"></div>
        </div>
        <div className="params">
          <div className="param">
            Двойные <span></span> <br /> стереодинамики
          </div>
          <div className="param">
            50 Мп <br /> камера
          </div>
          <div className="param">
            память <br /> 128 Гб +16 Гб
          </div>
          <div className="param">
            18 Вт <br /> быстрая зарядка
          </div>
        </div>
        <div className="l-desc">
          *Указана максимальная конфигурация памяти с учетом <br />
          расширения виртуальной оперативной памяти
        </div>
      </div>
    </div>
  );
}

export default SectionOne