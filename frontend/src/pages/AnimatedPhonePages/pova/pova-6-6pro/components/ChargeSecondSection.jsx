import ContentSection from "./ContentSection";

const ChargeSecondSection = () => {
  const firstBack =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-4ladder-charge-afdfe445.jpg";
  const secondBack =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-4ladder-end-bf3c3a3c.jpg";
  return (
    <ContentSection backImg={firstBack} backPos="top">
      <ContentSection backImg={secondBack} backPos="center bottom">
        <div className="charge-section-second">
          <h1 className="pova-title">Несколько режимов зарядки</h1>
          <h3 className="pova-subtitle">Зарядка стала еще умнее и быстрее</h3>
          <p className="pova-desc">
            Вы можете выбрать между низкотемпературной, умной и сверхбыстрой
            зарядкой в соответствии с вашими текущими потребностями
          </p>
          <ul>
            <li>
              <h1>Низкотемпературная зарядка</h1>
              <p>
                более длительный процесс заряда, который экономит ресурс
                аккумулятора
              </p>
            </li>
            <li className="charge-section-second-list">
              <h1>Умная зарядка</h1>
              <p>
                адаптивный режим, который контролирует нагрев и мощность тока
              </p>
            </li>
            <li>
              <h1>Сверхбыстрая зарядка</h1>
              <p>
                максимально быстрый заряд, возможен нагрев смартфона и снижение
                производительности. Используется в особых случаях
              </p>
            </li>
          </ul>
        </div>
      </ContentSection>
    </ContentSection>
  );
};

export default ChargeSecondSection;
