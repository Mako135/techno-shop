
const PlusSectionSeven = () => {
  return (
    <div className="section-seven">
      <div className="seven-section-titles-2">
        <p>
          <span>Изящный внешне</span>
        </p>
        <p>
          <span>Приятный на ощупь</span>
        </p>
      </div>
      <footer>
        <div className="footer-right">
          <picture>
            <source
              srcSet="https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec7PcPhone.webp"
              type="image/webp"
              media="(min-width: 1024px)"
            />
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec7PcPhone.webp"
              alt="phone"
            />
          </picture>
        </div>
        <div className="footer-left">
          <h2 className="section-right-title">Прикоснитесь к роскоши</h2>
          <p className="section-right-subtitle">Утонченный и стильный дизайн</p>
          <p className="section-right-desc">
            Оцените новый стиль SPARK с ярким корпусом и круглым блоком камер,
            напоминающим объектив профессиональных камер. Созданный с помощью
            техники фотолитографии, которая также применяется в дизайне дорогих
            часов, утонченный стиль раскрывает серию SPARK совершенно по-новому
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlusSectionSeven;