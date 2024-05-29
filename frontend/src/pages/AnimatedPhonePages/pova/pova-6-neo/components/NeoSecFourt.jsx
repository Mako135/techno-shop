const NeoSecFourt = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/chapter1-section3-bg.webp";
  const small =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter1/chapter1-section3-bg-mb.webp";
    
    const large_f =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter3-fhd.webp";
    const small_f =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter3-fhd-mb.webp";
  return (
    <div className="neo-14">
      <picture>
        <source media="(max-width: 768px)" srcSet={small} />
        <img src={large} alt="" className="neo-5-bg" />
      </picture>
      <div className="neo-14-content">
        <div className="neo-14-content-inner">
          <div className="neo-title">6.8” FHD+</div>
          <picture>
            <source media="(max-width: 768px)" srcSet={small_f} />
            <img src={large_f} alt="" className="neo-5-bg" />
          </picture>
          <footer>
            <div className="neo-title">6.8” экран FHD+ с частотой 120 Гц</div>
            <div className="neo-desc">
              Разрешение экрана 1080*2460. Пиковая яркость 580 нит. Плавная
              графика, четкое изображение
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NeoSecFourt;
