
const SparkSectionSeven = () => {
  return (
    <div className="section-seven">
      <div className="seven-section-titles-2">
        <p>
          <span>Изящный и тактильно приятный материал.</span>
        </p>
        <p>
          <span>Неповторимый шарм минимализма</span>
        </p>
      </div>
      <footer>
        <div
          className="footer-left"
          style={{ marginRight: 0, paddingRight: 0 }}
        >
          <h2 className="section-right-title">Футуристичный дизайн</h2>
          <p className="section-right-subtitle">Далекий космос в ваших руках</p>
          <p className="section-right-desc">
            Эстетика минимализма и нотки футуризма в трехкольцевом дизайне камер
            новой линейки SPARK. Тонкая и сбалансированная прямоугольная форма
            дополнена изящной гравировкой и ровными эргономичными углами.
            Удобный сканер отпечатка пальца на боковой грани смартфона.
            Современные инженерные решения для комфортной работы и статустный
            дизайн.
          </p>
          <div className="datas" style={{marginTop: "2vw"}}>
            <div className="data">
              <span>Трехкольцевой <br /> дизайн камер</span>
              <p>с металлическим блеском</p>
            </div>
            <div className="data">
              <span>Прямоугольная <br /> форма корпуса</span>
              <p>с улучшенной эргономикой</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <picture>
            <source
              srcSet="https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/png/sec7PcF1.png"
              type="image/webp"
              media="(min-width: 1024px)"
            />
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/png/sec7MbF1.png"
              alt="phone"
              className="seven-phone"
            />
          </picture>
        </div>
      </footer>
    </div>
  );
};

export default SparkSectionSeven;