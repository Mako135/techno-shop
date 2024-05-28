const NeoSecTwentyThree = () => {
  const back_pc =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter5-2mp.webp";
  const back_m =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-2mp-mb.webp";
    const left_figure =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter5-2mp-cover.webp";
    const left_figure_1 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-2mp-cover-mb.webp";
    const right_figure =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter5-3mp-cover.webp";
    const right_figure_1 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter5-3mp-cover-mb.webp";

  return (
    <div className="neo-23">
      <div className="left-text2">
        <picture>
          <source media="(max-width: 768px)" srcSet={back_m} />
          <img src={back_pc} alt="" className="neo-23-bg" />
        </picture>
        <div className="left-text2-content">
          <div className="neo-text">
            <h1>50 Мп основная камера</h1>
            <p>Сохраните яркие моменты</p>
            <span>
              Запечатлейте захватывающие события с помощью новой камеры 50 Мп!
              Создайте красивые и качественные снимки неповторимых и радостных
              моментов жизни
            </span>
          </div>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={left_figure_1} />
          <img src={left_figure} alt="" className="neo-23-phone" />
        </picture>
      </div>

      <div className="right-text2">
        <picture>
          <source media="(max-width: 768px)" srcSet={back_m} />
          <img src={back_pc} alt="" className="neo-23-bg" />
        </picture>
        <picture>
          <source media="(max-width: 768px)" srcSet={right_figure_1} />
          <img src={right_figure} alt="" className="neo-23-phone" />
        </picture>
        <div className="right-text2-content">
          <div className="neo-text">
            <h1>8 Мп фронтальная камера с выбором тона подсветки</h1>
            <p>Четкое изображение, яркая подсветка и захватывающие снимки</p>
            <span>
              Фронтальная камера высокой четкости 8 Мп оснащена диодной
              подсветкой с возможностью выбора температуры света: вы можете
              переключаться между холодным, теплым и естественным тоном в
              зависимости от освещения. Создайте идеальный портрет одним
              касанием!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoSecTwentyThree;
