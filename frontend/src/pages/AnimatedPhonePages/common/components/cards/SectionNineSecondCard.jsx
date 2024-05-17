
const SectionNineSecondCard = () => {
  return (
    <div className="section-card-second">
      <div className="card-content">
        <h1>Индикатор записи</h1>
        <p>
          Мотор! Команда, с которой начинается волшебный мир кино. Сущность
          кинокамеры воплощена в дизайне серии CAMON 30. Вам осталось лишь
          создать собственный фильм
        </p>
        <div className="card-content-dots">
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Индикатор</b>
              записи видео
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Индикатор</b>
              голосового помощника
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Индикатор</b>
              ИК-пульта
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Индикатор</b>
              зарядки
            </span>
          </div>
        </div>
      </div>

      <div className="ninth-section-card-image">
        <div className="frames">
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/left_bottom.png"
            alt=""
            className="left-bottom"
          />
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/left_top.png"
            alt=""
            className="left-top"
          />
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/right_bottom.png"
            alt=""
            className="right-bottom"
          />
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focusRectangle/right_top.png"
            alt=""
            className="right-top"
          />
        </div>
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/designSection/smartBreathing_cl6.jpg"
          alt=""
          className="section-card-image"
        />
      </div>
    </div>
  );
};

export default SectionNineSecondCard;