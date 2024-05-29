const NeoSecSix = () => {
  const back_pc =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-eletricity-bg.webp";
  const back_m =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-eletricity-bg-mb.webp";
    
    return (
      <div className="neo-6">
        <picture>
          <source media="(max-width: 768px)" srcSet={back_m} />
          <img src={back_pc} alt="" className="neo-5-bg" />
        </picture>
        <div className="neo-6-content">
          <header>
            <div className="neo-title">
              7000 мАч аккумулятор / 33 Вт быстрая зарядка <br /> Энергии хватит
              надолго
            </div>
            <div className="neo-subtitle">
              POVA 6 Neo оснащен самым большим аккумулятором среди смартфонов
              TECNO, чтобы обеспечить вас энергией на протяжении всего дня даже
              при интенсивной работе*
            </div>
          </header>
          <footer>
            <ul>
              <li>
                <span>Звонки</span>
                <h2>39 ч +</h2>
              </li>
              <li>
                <span>Звонки</span>
                <h2>39 ч +</h2>
              </li>
              <li>
                <span>Звонки</span>
                <h2>39 ч +</h2>
              </li>
              <li>
                <span>Звонки</span>
                <h2>39 ч +</h2>
              </li>
            </ul>
            <div className="tips">
              *Данные предоставлены TECNO Lab по результатам тестов
            </div>
          </footer>
        </div>
      </div>
    );
};

export default NeoSecSix;
