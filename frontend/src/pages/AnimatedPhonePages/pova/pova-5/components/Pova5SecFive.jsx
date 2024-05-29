const Pova5SecFive = () => {
  const frame_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/lifelike-1-460fc3e1.png";
  const m_frame_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/lifelike-1-m-4bc4ce79.png";
  const frame_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/lifelike-2-a2bb04a1.png";
  const m_frame_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/lifelike-2-m-e010be7c.png";

  return (
    <div className="pova-5">
      <div className="pova-5-content"></div>
      <div className="pova-5-text">
        <h1>
          ДИЗАЙН <br /> «ТУРБО МÉХА»
        </h1>
        <p>
          Дизайн POVA 5 вдохновлен энергией ветра и механикой футуристичных
          роботов. <br /> Технологии будущего теперь в твоих руках
        </p>
      </div>
      <ul>
        <li className="pova-5-list">
          <h1>
            Эффект объемных <br /> металлических пластин
          </h1>
          <picture>
            <source media="(max-width: 768px)" srcSet={m_frame_1} />
            <img src={frame_1} alt="" />
          </picture>
          <div className="pova-5-figure"></div>
        </li>
        <li className="pova-5-list-2">
          <h1>Обработка рамки <br /> методом NCVM</h1>
          <picture>
            <source media="(max-width: 768px)" srcSet={m_frame_2} />
            <img src={frame_2} alt="" />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default Pova5SecFive;
