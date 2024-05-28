
const NeoSecTwentyOne = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter4-4Map.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter4-4Map-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Защита от пыли и влаги IP53</div>
        <div className="neo-subtitle">
          Смартфон защищен от частиц пыли и брызг
        </div>
      </div>
    </div>
  );
};
export default NeoSecTwentyOne