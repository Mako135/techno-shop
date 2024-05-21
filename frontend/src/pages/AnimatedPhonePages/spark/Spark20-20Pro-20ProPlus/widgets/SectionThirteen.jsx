
const SectionThirteen = () => {
  return (
    <div className="section-thirteen">
      <p>
        <span>Наслаждайтесь каждым мгновением</span>
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
        <video src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec13PcV1.mp4" muted autoPlay loop></video>
        <footer>
          <div className="footer-left">
            <div className="items">
              <div className="item">
                <h4>Громкость 100%</h4>
                <div className="footer-line line1"></div>
              </div>
              <div className="item">
                <h4>Увеличенная громкость 400%</h4>
                <div className="footer-line line2"></div>
              </div>
            </div>
          </div>
          <div className="footer-right2">
            <div className="datas">
              <div className="data">
                <h5>Двойные стереодинамики%</h5>
                <p>улучшают качество</p>
              </div>
              <div className="data">
                <h5>Volume Plus%</h5>
                <p>усиливает громкость</p>
              </div>
              <div className="data">
                <h5>Бинауральная технология</h5>
                <p>распределяет каналы</p>
              </div>
              <div className="data">
                <div className="dts"></div>
                <p>создает объемный звук</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SectionThirteen