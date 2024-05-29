
const NeoSecEight = () => {
    const small =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter2-cold-image-mb.webp";
    const large =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter2/chapter2-cold-image.webp";
  return (
    <div>
      <div className="neo-right-card">
        <picture>
          <picture>
            <source media="(max-width: 768px)" srcSet={small} />
            <img src={large} alt="" className="neo-5-bg" />
          </picture>
        </picture>
        <div className="right-text1">
          <div>
            <h1>Не боится холода. Заряжается даже при -10°C</h1>
            <p>
              Аккумулятор POVA 6 Neo выдерживает экстремальные зимние
              температуры и эффективно заряжается даже в мороз
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeoSecEight