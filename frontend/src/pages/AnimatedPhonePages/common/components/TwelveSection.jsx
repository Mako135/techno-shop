const TwelveSection = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/videos/decompose_cl6.mp4";
  return (
    <div className="twelve-section">
      <header>
        <h1>20-слойная система охлаждения</h1>
        <div className="header-inner">
          <h4>
            В новом CAMON 30 установлена усовершенствованная технология
            охлаждения, основанная на трехмерном рассеивании тепла. Больше
            никаких задержек и зависаний даже при самой интенсивной работе.
          </h4>
          <div className="dots-section-conatiner">
            <div className="card-content-dots" id="eleven-dots">
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>11931 мм²</b>
                  общая площадь охлаждения
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>20 слоев</b>
                  системы охлаждения
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>+19%*</b>к площади системы
                </span>
              </div>
              
            </div>
          </div>
        </div>
          </header>
          <video src={video} muted autoPlay></video>
    </div>
  );
};

export default TwelveSection;
