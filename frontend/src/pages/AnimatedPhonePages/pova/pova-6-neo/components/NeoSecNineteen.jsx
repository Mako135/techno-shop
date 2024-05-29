const NeoSecNineteen = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter4-media-bg.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter3-9ai-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Процессор MediaTek G99 Ultimate</div>
        <div className="neo-desc">
          Смартфон оснащен оптимизированным 6-нанометровым процессором MediaTek
          Helio G99 Ultimate, благодаря чему производительность повышена на 7%
          по сравнению с предыдущей моделью чипсета. Оцените отличную скорость
          работы устройства!
        </div>
      </div>
    </div>
  );
};
export default NeoSecNineteen;
