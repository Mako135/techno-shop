
const FoldSecSix = () => {
    const figure_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designMaterialSection/01.jpg";
    const figure_2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designMaterialSection/02.jpg";
    const figure_3 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designMaterialSection/03.jpg";
  return (
    <div>
      <div className="fold-four-content">
        <img src={figure_1} alt="" />
        <div className="fold-four-text">
          <h1>
            Потрясающая эргономика <br />и комфортная работа, как в сложенном,
            так и в раскрытом виде
          </h1>
          <p>
            Теперь вам доступно множество сценариев использования смартфона,
            которые подарят абсолютно новый опыт при работе с устройством
          </p>
        </div>
      </div>
      <div className="fold-four-content">
        <div className="fold-four-text">
          <h1>
            Дизайн со слегка изогнутыми краями <br />
            Изящество в деталях
          </h1>
          <p>
            Слегка изогнутый дополнительный экран и задняя панель для
            комфортного использования одной рукой
          </p>
        </div>
        <img src={figure_2} alt="" />
      </div>
      <div className="fold-four-content">
        <img src={figure_3} alt="" />
        <div className="fold-four-text">
          <h1>
            Премиальный дизайн <br />
            вдохновленный далеким космосом
          </h1>
          <p>
            Дизайн задней панели и блока камер создан с отсылкой к неизведанным
            галактикам. Целая вселенная теперь в ваших руках
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoldSecSix