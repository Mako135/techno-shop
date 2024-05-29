

const Pova5SecSixteen = () => {
    const video =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-hi-res.mp4";
    const icons =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/dts-hires-icons-cb8b2913.png";
  return (
    <div className="sec-16">
      <div className="pova-text">
        <h1>
          ДВОЙНЫЕ СТЕРЕОДИНАМИКИ С ПОДДЕРЖКОЙ HI-RES AUDIO И ОБЪЕМНЫМ ЗВУКОМ DTS
        </h1>
        <p>
          Поддержка 4G LTE позволит тебе наслаждаться быстрым интернетом и
          беззаботно общаться с друзьями. С POVA 5 ты всегда будешь на связи!
        </p>
        <div className="sec-16-icons">
          <img src={icons} alt="" />
        </div>
      </div>
      <video src={video}></video>
    </div>
  );
}

export default Pova5SecSixteen