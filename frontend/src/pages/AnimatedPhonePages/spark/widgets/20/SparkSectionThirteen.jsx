
const SparkSectionThirteen = () => {
  return (
    <div className="spark-section-thirteen">
      <p>
        <span>Калейдоскоп новых</span>
      </p>
      <p>
        <span>впечатлений</span>
      </p>

      <div className="section-thirteen-content">
        <header>
          <h2 className="section-right-tilte">
            Стереодинамики с объемным звуком DTS
          </h2>
          <p className="section-right-subtitle">
            Почувствуйте каждую ноту превосходного звука. В новой модели
            динамики стали на 200% громче, чем в моделях предыдущего поколения,
            и поддерживают объемный звук DTS. Адаптивная технология звучания
            подстраивается под положение смартфона в пространстве, и точно
            воспроизводит звук в видеоролике или игре. А громкость и четкость
            звонков повысилась на 400% по сравнению с предыдущими моделями. Вы
            можете плавно переключаться на громкую связь и обратно без потери
            качества звука с функцией Volume Plu
          </p>
        </header>
        <video
          src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec13PcV1.mp4"
          muted
          autoPlay
          loop
        ></video>
        <footer>
          <div className="footer-left">
            <div className="items">
              <div className="item">
                <h3>Громкость 100%</h3>
                <div className="footer-line line1 line-purp"></div>
              </div>
              <div className="item">
                <h3>Увеличенная громкость 400%</h3>
                <div className="footer-line line2 line-purp"></div>
              </div>
            </div>
          </div>
          <div className="footer-right2">
            <div className="datas-2">
              <div className="data">
                <div className="data-title">Двойные <br /> стереодинамики</div>
                <p>улучшают качество</p>
              </div>
              <div className="data">
                <div className="data-title">Volume Plus</div>
                <p>усиливает громкость</p>
              </div>
              <div className="data">
                <div className="data-title">Бинауральная <br /> технология</div>
                <p>распределяет каналы</p>
              </div>
              <div className="data">
                <div className="data-title">DTS</div>
                <p>создает объемный звук</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SparkSectionThirteen;