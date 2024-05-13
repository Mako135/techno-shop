const SecondBatterySection = () => {
  const backVideo =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/pova6-5g/v-electric.mp4";
  return (
    <div className="second-battery-container">
      <video autoPlay muted loop className="background-video">
        <source src={backVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-inner-2">
        <div className="first">
          <h1>6000 мАч</h1>
          <h3>Энергии хватит надолго</h3>
          <p>
            Непревзойденная выносливость POVA 6 позволяет интенсивно
            пользоваться смартфоном в течение всего дня
          </p>
          <ul>
            <li>
              <span>Звонки</span>
              <strong>
                31 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Игры</span>
              <strong>
                11 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Соцсети</span>
              <strong>
                15 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Видео </span>
              <strong>
                14 <sup>+ часов</sup>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondBatterySection;
