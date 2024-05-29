const Pova5SecThirteen = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-fhd-display.mp4";
  return (
    <div className="pova-sec-13">
      <div className="pova-text">
        <h1>
          ЭКРАН 6.8 FHD+ <br /> С ЧАСТОТОЙ ОБНОВЛЕНИЯ 120 ГЦ
        </h1>
        <p className="pova-desc">
          Разрешение 2460 x 1080, повышенная яркость до 580 нит, плавный экран,
          быстрый отклик <br /> касания и четкое изображение.
        </p>
        <ul>
          <li>
            <p>240 Гц</p>
            <span>Частота дискретизации экрана</span>
          </li>
          <li>
            <p>580 нит</p>
            <span>Максимальная яркость</span>
          </li>
        </ul>
      </div>
      <video src={video} muted autoPlay loop></video>
    </div>
  );
};

export default Pova5SecThirteen;
