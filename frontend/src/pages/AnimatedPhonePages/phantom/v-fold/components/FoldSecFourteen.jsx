const FoldSecFourteen = () => {
  const video_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/speedDesignSection/01.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/speedDesignSection/02.png";
  const video_2 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/speedDesignSection/03.mp4";
    
    const card_img =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/phoneShellSection/01.jpg";
    const card_img2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/phoneShellSection/02.jpg";

  return (
    <div className="fold-14">
      <div className="fold-title">
        Эффективность и производительность <br />
        Выбор настоящих лидеров
      </div>
      <div className="fold-subtitle">
        Большой экран помогает ускорить работу и сделать ее более эффективной.
        <br /> Воспользуйтесь новыми пользовательскими <br /> возможностями для
        быстрого решения самых важных задач.
      </div>

      {/* card start */}

      <div className="fold-14-cards">
        <div className="fold-14-card">
          <div className="card-title">
            Разделить экран <br /> одним движением
          </div>
          <div className="card-subtitle">
            Проведите пальцем вниз по экрану и пользуйтесь дополнительным окном
          </div>
          <video src={video_1}></video>
        </div>
        <div className="fold-14-card">
          <div className="card-title">Открыть параллельное окно</div>
          <div className="card-subtitle">
            Разделите экран прямо в приложении, для максимально эффективной
            работы и общения
          </div>
          <img src={figure} alt="" />
        </div>
        <div className="fold-14-card">
          <div className="card-title">
            Переместить <br /> файлы куда угодно
          </div>
          <div className="card-subtitle">
            Делиться файлами теперь проще простого.
          </div>
          <video src={video_2}></video>
        </div>
      </div>

      {/* card end */}

      <div className="fold-14-footer">
   
          <div className="footer-title">Эксклюзивный защитный чехол</div>
          <div className="footer-subtitle">
            разработан специально для PHANTOM V Fold
          </div>
          <div className="footer-img-cards">
            <div className="footer-img-card">
              <img src={card_img} alt="" />
            </div>
            <div className="footer-img-card">
              <img src={card_img2} alt="" />
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default FoldSecFourteen;
