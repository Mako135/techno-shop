const FoldSecFive = () => {
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designHingeSection/01.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designHingeSection/02.jpg";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designHingeSection/03.jpg";


    const phone =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designHingeSection/04.jpg";
  return (
    <div className="fold-five">
      <div className="fold-wrapper">
        <h2>
          Инновационная запатентованная шарнирная конструкция <br /> Ровный и
          гладкий экран, который выдерживает более 200 000 раскладываний
        </h2>
        <h4>
          Детали изготовлены из материалов, которые используются в
          аэрокосмической отрасли. Прочные составные части и ровная поверхность
          экрана в разложенном виде.
        </h4>
        <div className="fold-five-cards">
          <div className="fold-five-card">
            <img src={figure_1} alt="" />
            <footer>
              <h3>
                Уникальная технология <br /> плавного раскрытия
                <br />
                экрана
              </h3>
              <p>
                Минимум заломов, максимум <br /> долговечности дисплея
              </p>
            </footer>
          </div>
          <div className="fold-five-card">
            <img src={figure_2} alt="" />
            <footer>
              <h3>
                Собственная <br />
                разработка механизма
                <br />
                складывания смартфона
              </h3>
              <p>
                Устойчивость к падениям <br />и механическим воздействиям
              </p>
            </footer>
          </div>
          <div className="fold-five-card">
            <img src={figure_3} alt="" />
            <footer>
              <h3>
                Использование материалов <br />
                аэрокосмической отрасли
              </h3>
              <p>
                Сочетание прочности <br /> и легкости
              </p>
            </footer>
          </div>
        </div>
      </div>

      <div className="fold-phone-spec">
        <img src={phone} alt="" />
        <div className="fold-phone-spec-text">
          <h2>Механизм раскладывания протестированный опытным путем</h2>
          <div className="datas">
            <div className="data">
              <p>Толщина сгиба</p>
              <span>&lt; 0.11 mm</span>
            </div>
            <div className="data">
              <p>Количество раскладываний</p>
              <span>200 000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldSecFive;
