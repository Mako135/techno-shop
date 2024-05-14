
const SixthVideoSection = () => {
   const frame =
     "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-experience-fhd-v-f1959893.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/video-c5-32MP-c3c314ae.mp4";
  return (
    <div>
      <section style={{ marginTop: "7.8125vw" }}>
        <div className="video-container">
          <h1 className="pova-title">
            32 Мп фронтальная камера с выбором тона подсветки
          </h1>
          <h3 className="pova-subtitle">
            Четкое изображение, яркая подсветка и захватывающие снимки
          </h3>

          <footer>
            <img src={frame} alt="" />
            <video src={video} muted autoPlay></video>
          </footer>
          <p className="pova-desc">
            Фронтальная камера высокой четкости 32 Мп оснащена светодиодной
            подсветкой с возможностью выбора температуры света: вы можете
            переключаться между холодным, теплым и естественным тоном в
            зависимости от освещения. Создайте идеальный портрет одним касанием
          </p>
        </div>
      </section>
    </div>
  );
}

export default SixthVideoSection