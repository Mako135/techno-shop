
const NeoSecTwentySix = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter6/chapter6-2curate-bg.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter6-2curate-bg-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Живые обои</div>
        <div className="neo-subtitle">
          Целый динамичный мир на экране смартфона
        </div>
        <div className="neo-desc">
          Настройте динамические обои на свой вкус. Кастомизируйте экран
          блокировки или включите режим Always on Display. В ваших руках целая
          коллекция изображений, цветов и форм
        </div>
      </div>
    </div>
  );
};
export default NeoSecTwentySix