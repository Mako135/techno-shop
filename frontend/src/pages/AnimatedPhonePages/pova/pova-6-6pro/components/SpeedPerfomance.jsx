
const SpeedPerfomance = () => {
    const background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-rate-45320e5d.jpg";
    const frame =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-5ExperienceRate-border-bg-96e81feb.png";
  return (
    <div className="speed-container">
      <img src={background} alt="" className="speed-bacground"/>
      <div className="speed-perfomance">
        <h1 className="speed-title">Частота дискретизации</h1>
        <div className="speed-frame">
          <img src={frame} alt="" />
          <div className="speed-frame-overlay">
            <h1>Наслаждайтесь плавным и быстрым откликом</h1>
            <p>Частота кадров в играх MLBB и Free Fire возрастает до 90 fps</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedPerfomance