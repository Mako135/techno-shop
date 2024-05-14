import ContentSection from "./ContentSection";

const SecondDesignSection = () => {
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-3icon-bg-c8eee70c.jpg";
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-3icon-1-ff36f864.png";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-3icon-2-2a9031d4.png";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-3icon-3-004d1482.png";
  return (
    <ContentSection backImg={background} backPos="bottom">
      <div className="design-section">
        <h1 className="pova-title">Обновленный дизайн</h1>
        <h3 className="pova-subtitle">иконок меню</h3>
        <p className="pova-desc">
          Пользовательский интерфейс в HiOS 14 получил обновление: значки
          приобрели новую форму и объемный дизайн. Плавная и детализированная
          графика дополнена интуитивно понятным и красивым меню
        </p>
        <div className="design-icons">
          <img src={figure_1} alt="" />
          <img src={figure_2} alt="" />
          <img src={figure_3} alt="" />
        </div>
      </div>
    </ContentSection>
  );
};

export default SecondDesignSection;
