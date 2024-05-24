import ContentSection from './ContentSection'

const ChargeThirdSection = () => {
    const background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-5six-year-bg-2bd3e5d9.jpg";
    const figure =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-5seven-2d816afc.png";
  return (
    <ContentSection backImg={background} backPos="top">
      <div className="charge-third-section">
        <h1 >
          Аккумулятор гарантированно сохраняет 80% емкости в течение 6 лет
          работы. Это более 1600 полных зарядок*
        </h1>
        <img src={figure} alt="" />
      </div>
    </ContentSection>
  );
}

export default ChargeThirdSection