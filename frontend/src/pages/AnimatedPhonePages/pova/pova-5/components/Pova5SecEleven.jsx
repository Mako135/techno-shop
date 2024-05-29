const Pova5SecEleven = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-lh7n-cpu.mp4";
  return (
    <div className="pova-11">
      <div className="pova-text">
        <h1>
          ПРОЦЕССОР <br /> MEDIATEK HELIO G99
        </h1>
        <p>
          POVA 5 оснащен 6-нанометровым процессором Helio G99. На 7%
          эффективнее, чем <br /> в предыдущей модели. <br /> Оцени мощную
          производительность даже при самой интенсивной работе
        </p>
        <ul>
          <li>
            <span>Техпроцесс</span>
            <p>6нм</p>
          </li>
          <li>
            <span>Движок HyperEngine</span>
            <p>2.0 lite</p>
          </li>
          <li>
            <span>Процессор</span>
            <p>8 ядер</p>
          </li>
        </ul>
      </div>
      <video src={video}></video>
    </div>
  );
};

export default Pova5SecEleven;
