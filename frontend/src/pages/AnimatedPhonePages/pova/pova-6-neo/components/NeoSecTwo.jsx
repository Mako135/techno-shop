
const NeoSecTwo = () => {
    const large =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sell-pc-ru.webp";
    const small =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/sell-mb-ru.webp";
  return (
    <div className="neo-2">
      <picture>
        <source srcSet={large} media="(min-width: 768px)" />
        <img src={small} alt="Banner" />
      </picture>
    </div>
  );
}

export default NeoSecTwo