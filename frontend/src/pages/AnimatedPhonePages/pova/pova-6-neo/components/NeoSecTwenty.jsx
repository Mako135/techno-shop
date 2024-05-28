
const NeoSecTwenty = () => {
    const back =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter4-2Rom-mb.webp"; 
     const large_frame =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-4ladder-card.webp";
    const small_frame =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-4ladder-card-mb.webp";

  return (
    <div className="neo-20">
      <img src={back} alt="" />
      <div className="neo-20-content">
        <div className="neo-title">
          256 Гб ПЗУ + 16 Гб ОЗУ* <br /> Больше памяти для любых задач
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
}

export default NeoSecTwenty