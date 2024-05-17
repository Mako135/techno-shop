import SectionNineFirstCard from "./cards/SectionNineFirstCard";
import SectionNineSecondCard from "./cards/SectionNineSecondCard";

const NinthSection = () => {
  return (
    <div className="ninth-section">
      <div className="camon-container">
        <div className="section-title">
          <h1 className="section-title-text">
            Как у <br /> профи
          </h1>
        </div>
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/designSection/main_cl6RU.jpg"
          alt=""
          className="section-banner"
        />
        <div className="banner-footer">
          <h2>Дизайн в стиле винтажной камеры</h2>
          <p>
            Образ классической фотокамеры стал основой дизайна всей серии CAMON
            30. В сочетании с тонким и легким корпусом обновленная линейка
            камерофонов TECNO стала настоящей иконой стиля
          </p>
        </div>

        <div className="section-cards">
          <SectionNineFirstCard />
          <SectionNineSecondCard />
        </div>
      </div>
    </div>
  );
};

export default NinthSection;
