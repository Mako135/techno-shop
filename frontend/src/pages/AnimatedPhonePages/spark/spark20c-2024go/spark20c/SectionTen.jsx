const SectionTen = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec12Pc.mp4";
  return (
    <div className="sec-10">
      <div className="icon_container">
        <div className="title">В два раза больше мощности!</div>
        <div className="icon icon5"></div>
      </div>
      <div className="sec-10-content">
        <video src={video} muted autoPlay loop></video>
        <div className="sec-10-left">
          <div className="sec-10-title">
            Энергоемкий <br /> аккумулятор <br /> 5000 мАч <br /> и быстрая
            зарядка <br /> 18 Вт Type-C
          </div>
          <div className="sec-10-desc">
            Забудьте про постоянную зарядку смартфона. Слушайте музыку и
            смотрите видео целый день напролет. Даже если энергия аккумулятора
            на исходе, вы сможете быстро восстановить его ресурс с помощью
            Type-C зарядки 18 Вт. Оставайтесь на связи!
          </div>
        </div>
        <div className="sec-10-right">
          <div className="param">
            <div className="title">5000 мАч</div>
            <div className="desc">Энергоемкий аккумулятор</div>
          </div>
          <div className="param">
            <div className="title">18 Вт</div>
            <div className="desc">Зарядка</div>
          </div>
          <div className="param">
            <div className="title">Type-C</div>
            <div className="desc">Интерфейс</div>
          </div>
              </div>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
      </div>
    </div>
  );
};

export default SectionTen;
