const NeoSecNine = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-4ladder-charge.webp";
  const small =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-4ladder-charge-mb.webp";
    const large_frame =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-4ladder-card.webp";
    const small_frame =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-4ladder-card-mb.webp";

  return (
    <div className="neo-9">
      <picture>
        <source srcSet={large} media="(min-width: 768px)" />
        <img src={small} alt="Banner" className="neo_back" />
      </picture>
      <div className="neo-9-content">
        <div>
          <div className="neo-title">
            Несколько режимов <br /> зарядки. Еще умнее, <br /> еще быстрее
          </div>
          <div className="neo-desc">
            Вы можете выбрать между низкотемпературной, <br /> умной и
            сверхбыстрой зарядкой в соответствии с <br /> вашими текущими
            потребностями
          </div>
        </div>
        <ul>
          <li>
            <picture>
              <source srcSet={large_frame} media="(min-width: 768px)" />
              <img src={small_frame} alt="Banner" className="neo_back" />
            </picture>
            <div className="neo-9-card-content">
              <h1>Низкотемпературная зарядка</h1>
              <p>
                более длительный процесс заряда, который экономит ресурс
                аккумулятора
              </p>
            </div>
          </li>
          <li className="neo-9-second-card">
            <picture>
              <source srcSet={large_frame} media="(min-width: 768px)" />
              <img src={small_frame} alt="Banner" className="neo_back" />
            </picture>
            <div className="neo-9-card-content">
              <h1>Умная зарядка</h1>
              <p>
                адаптивный режим, который контролирует нагрев и мощность тока
              </p>
            </div>
          </li>
          <li className="neo-9-third-card">
            <picture>
              <source srcSet={large_frame} media="(min-width: 768px)" />
              <img src={small_frame} alt="Banner" className="neo_back" />
            </picture>
            <div className="neo-9-card-content">
              <h1>Сверхбыстрая зарядка</h1>
              <p>
                максимально быстрый заряд, возможен нагрев смартфона и снижение
                производительности. Используется в особых случаях
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NeoSecNine;
