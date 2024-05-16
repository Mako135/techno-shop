
const SixthSection = () => {
    const banner =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/portraitVideoSection/main.jpg";

  return (
    <div className="camon-container">
      <section className="six-section">
        <h2>Делитесь <br /> впечатлениями</h2>
        <img src={banner} alt="" />
        <footer className="six-section-footer">
          <h4>2К 30 к/с <br /> чёткое и плавное видео</h4>
          <p>
            Хотите, чтобы ваши соцсети заиграли новыми красками? Записывайте
            красочные видеоролики в высоком качестве 2К и 30 кадр/сек. Добавьте
            еще больше эффекта своим видео с помощью режима замедленной съемки.
            Позвольте себе лучшее качество контента.
          </p>
        </footer>
      </section>
    </div>
  );
}

export default SixthSection