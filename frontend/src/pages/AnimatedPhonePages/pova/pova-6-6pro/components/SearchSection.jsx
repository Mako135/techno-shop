import ContentSection from "./ContentSection";

const SearchSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-6search-6be23d42.jpg";
    return (
      <ContentSection backImg={background} backPos="bottom">
        <div className="search-section">
          <h1 className="pova-title">Умный поиск</h1>
          <h3 className="pova-subtitle">
            Находите фото по ключевым словам в Галерее AI
          </h3>
          <p className="pova-desc">
            Поисковая строка в Галерее AI поможет быстро найти нужное
            изображение по ключевым словам
          </p>
        </div>
      </ContentSection>
    );
}

export default SearchSection