import ContentSection from './ContentSection';
const SecondVideoSection = () => {
    const background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-8SuperCooled-4f61fce9.jpg";
    const frame =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-experience-fhd-v-f1959893.png";
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-c3-8.mp4";
  return (
    <ContentSection backImg={background} backPos="bottom">
      <section style={{marginTop: "7.8125vw"}}>
        <div className="video-container">
          <h1 className="pova-title">
            Новая система охлаждения POVA SuperCooled System 1.0
          </h1>
          <h3 className="pova-subtitle">
            27342 мм² площадь охлаждения: оставайтесь хладнокровны даже в самых
            жарких киберсражениях
          </h3>
          <p className="pova-desc">
            Совершенно новая система охлаждения POVA с 10-слойной структурой,
            термогелем с фазовым переходом 5 Вт, испарительной камерой 2871.78
            мм² и графитовым охладителем теплопроводностью 1700 Вт. Все это
            вместе с системой контроля температуры E-sport Pro обеспечат
            эффективное рассеивание тепла во время напряженных игровых сеансов
          </p>

          <footer>
            <img src={frame} alt="" />
            <video src={video} muted autoPlay></video>
          </footer>
        </div>
      </section>
    </ContentSection>
  );
}

export default SecondVideoSection