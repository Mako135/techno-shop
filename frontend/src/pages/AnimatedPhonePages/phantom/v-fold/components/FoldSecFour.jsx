const FoldSecFour = () => {
  const figure_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/screenOverviewSection/BgImg0@2x.jpg";
    const figure_2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/screenOverviewSection/BgImg1@2x.jpg";

  return (
    <div className="fold-four">
      <div className="fold-four-content">
        <img src={figure_1} alt="" />
        <div className="fold-four-text">
          <h1>Идеально ровный складной экран 7,9</h1>
          <p>
            Откройте новые возможности с широким и ровным внутренним экраном.
            Оцените продвинутые пользовательские сценарии для игр и работы
          </p>
          <div className="dots">
            <div className="dot-container">
              <div className="dot"></div>
              <span>8:7 Оптимальные размеры основного экрана</span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Гибкий AMOLED-экран</span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Разрешение 2К+</span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Экран занимает 95,1% от площади поверхности</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fold-four-content">
        <div className="fold-four-text">
          <h1>Закругленный внешний экран 6,4”</h1>
          <h1>Идеальный размер для использования одной рукой</h1>
          <p>
            Кинематографическое соотношение сторон экрана 21:9 с уникальным
            слегка закругленным дизайном. Удобство и функциональность внешнего
            дисплея
          </p>
          <div className="dots">
            <div className="dot-container">
              <div className="dot"></div>
              <span>
                Оптимальное соотношение сторон дополнительного экрана 21:9
              </span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Гибкий AMOLED-экран</span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Разрешение 1080P</span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>Экран занимает 90,1% от площади поверхности</span>
            </div>
          </div>
        </div>
        <img src={figure_2} alt="" />
      </div>
    </div>
  );
};

export default FoldSecFour;
