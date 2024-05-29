
const NeoSecTwentyEight = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter6/chapter6-6search-ru.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter6-6search-mb-ru.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Умный поиск</div>
        <div className="neo-subtitle"></div>
        <div className="neo-desc">
          Находите фото по ключевым словам в Галерее AI <br /> Устаете листать сотни
          фотографий в поисках нужной? Поисковая строка в Галерее AI поможет
          быстро найти фото по ключевым словам
        </div>
      </div>
    </div>
  );
};
export default NeoSecTwentyEight