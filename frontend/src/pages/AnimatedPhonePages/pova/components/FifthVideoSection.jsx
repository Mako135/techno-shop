
const FifthVideoSection = () => {
 
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-experience-fhd-v-f1959893.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-c5-2.mp4";
  return (
    <div>
      <section style={{ marginTop: "7.8125vw" }}>
        <div className="video-container">
          <h1 className="pova-title">108 Мп основная камера</h1>
          <h3 className="pova-subtitle">Четкие и яркие снимки</h3>

          <footer>
            <img src={frame} alt="" />
            <video src={video} muted autoPlay></video>
          </footer>
          <p className="pova-desc">
            10-кратный цифровой зум без потери качества и большой сенсор с
            размером пикселя 0.7 мкм помогут создать яркие и живые снимки
          </p>
        </div>
      </section>
    </div>
  );
}

export default FifthVideoSection