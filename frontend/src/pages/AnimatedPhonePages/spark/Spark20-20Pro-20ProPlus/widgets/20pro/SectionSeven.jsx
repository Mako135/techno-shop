
const SectionSeven = () => {
  return (
    <div className="section-seven">
      <div className="seven-section-titles">
        <p>
          <span>Изящный внешне</span>
        </p>
        <p>
          <span>Приятный на ощупь</span>
        </p>
      </div>
      <footer>
        <div className="footer-left">
          <h2 className="section-right-title">Минимализм в дизайне</h2>
          <p className="section-right-subtitle">Космос в ваших руках</p>
          <p className="section-right-desc">
            Эстетика минимализма и нотки футуризма в трехкольцевом дизайне камер
            новой линейки SPARK. Тонкая и сбалансированная прямоугольная форма
            дополнена изящной гравировкой и ровными эргономичными углами. Сканер
            отпечатка пальца удобно расположен на боковой грани смартфона.
            Современные инженерные решения и статусный дизайн в новом смартфоне
          </p>
          <div className="footer-datas">
            <div className="data">
              <h4>Трехкольцевой дизайн</h4>
              <p>блока камер</p>
            </div>
            <div className="data">
              <h4>Минималистичные формы</h4>
              <p>эргономичного корпуса</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <picture>
            <source
              srcSet="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/webp/sec7PcF1.webp"
              type="image/webp"
              media="(min-width: 1024px)"
            />
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/webp/sec7PcF1.webp"
              alt="phone"
            />
          </picture>
        </div>
      </footer>
    </div>
  );
}

export default SectionSeven