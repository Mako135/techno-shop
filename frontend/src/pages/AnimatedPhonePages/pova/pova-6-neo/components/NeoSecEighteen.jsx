
const NeoSecEighteen = () => {
  const back_pc =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/section-02-bg.webp";
  const back_m =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/section-02-bg-mb.webp";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter4-bg-right.webp";
  return (
    <div className="neo-5">
      <h2 className="neo-5-subtitle">POVA 6 NEO ─ Погружение</h2>

      <picture>
        <source media="(max-width: 768px)" srcSet={back_m} />
        <img src={back_pc} alt="" className="neo-5-bg" />
      </picture>
      <div className="neo-5-content">
        <section className="neo-5-content-inner">
          <section className="neo-5-content-titles">
            <h1>
              Превосходная <br /> производительность
            </h1>
          </section>
          <img src={figure} alt="" />
        </section>
      </div>
    </div>
  );
};

export default NeoSecEighteen