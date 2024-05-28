
const NeoSecTwentySeven = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter6/chapter6-4game-bg.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter6-4game-bg-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Game Space 4.0</div>
        <div className="neo-subtitle">
          Отдельное пространство для комфортной игры
        </div>
        <div className="neo-desc">
          Последняя версия Game Control Panel автоматически настраивает
          графический процессор под игровой режим вместе с сенсорным управлением
          и режимом энергосбережения. Режим полностью контролирует оперативную и
          основную память, работу процессора, сеть, питание и температуру
        </div>
      </div>
    </div>
  );
};
export default NeoSecTwentySeven