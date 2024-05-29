
const NeoSecTwelve = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-7waterproof.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-7waterproof-mb.webp";
  return (
    <div className="neo-left-card">
      <div className="left-text1">
        <h1>1% заряда достаточно для 20 минут разговоров*</h1>
        <p>
          Даже с 1% заряда POVA 6 Neo остается максимально выносливым и
          сохраняет достаточно энергии, которой хватит на экстренный звонок и
          несколько часов в режиме ожидания
        </p>
        <footer>
          <ul>
            <li>
              <span>Звонки</span>
              <h2>20 минут</h2>
            </li>
            <li>
              <span>Игры</span>
              <h2>39 часа +</h2>
            </li>
            <li>
              <span>Режим ожидания</span>
              <h2>4 часа +</h2>
            </li>
          </ul>
          <div className="tips">
            *Данные предоставлены TECNO Lab по результатам тестов
          </div>
        </footer>
      </div>
      <picture>
        <source media="(max-width: 768px)" srcSet={small} />
        <img src={large} alt="" className="neo-5-bg" />
      </picture>
    </div>
  );
}

export default NeoSecTwelve