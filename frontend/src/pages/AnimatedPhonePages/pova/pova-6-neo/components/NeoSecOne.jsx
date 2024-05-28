
const NeoSecOne = () => {
    const large =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/section/sec1_pc.jpg";
    const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/section/sec1_m.jpg";
  
  return (
    <div className="neo-1">
      <picture >
        <source srcSet={large} media="(min-width: 768px)" />
        <img
          src={small}
          alt="Banner"
        />
      </picture>
    </div>
  );
}

export default NeoSecOne