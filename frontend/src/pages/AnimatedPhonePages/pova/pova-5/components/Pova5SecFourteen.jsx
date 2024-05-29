const Pova5SecFourteen = () => {
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/video-border2-1444f637.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-area.mp4";
  return (
    <div className="pova-14">
      <div className="pova-text">
        <h1>256 ГБ ПЗУ + 8 ГБ ОЗУ (РАСШИРЕНИЕ ОПЕРАТИВНОЙ ПАМЯТИ ДО 16 ГБ)</h1>
        <br />
        <p>
          1399.65 мм² объем испарительной камеры + <br />
          <br /> 9349.39 мм² объем графитового радиатора Благодаря 10 слоям
          рассеивающего тепло материала, температура процессора снижается на 5°
          при перезагрузке игровых сцен. По сравнению с предыдущим поколением
          смартфона, охлаждение процессора в POVA 5 почти в два раза эффективнее{" "}
        </p>
      </div>
      <div className="right-video-card">
        <img src={frame} alt="" />
        <video src={video} muted autoPlay loop></video>
      </div>
      <div className="pova-2-bottom"></div>
    </div>
  );
};

export default Pova5SecFourteen;
