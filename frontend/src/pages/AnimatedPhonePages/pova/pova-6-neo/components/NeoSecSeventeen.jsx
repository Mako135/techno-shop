const NeoSecSeventeen = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter3-9ai.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter3-9ai-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">4D виброотклик</div>
        <div className="neo-subtitle">
          Совместная сертификация PUBG и Tencent Lab
        </div>
        <div className="neo-desc">
          Z-осевой линейный вибромотор и жесткий гироскоп дадут еще больше
          острых ощущений от игры и повысят ваш уровень с шестью режимами
          управления
        </div>
      </div>
    </div>
  );
};

export default NeoSecSeventeen;
