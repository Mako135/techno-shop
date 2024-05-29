
const NeoSecTwentyNine = () => {
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter6/chapter6-7dynamic-port.webp";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/chapter6-7dynamic-port-mb.webp";
  return (
    <div className="sec-17">
      <picture>
        <source media="(min-width: 768px)" srcSet={large} />
        <img src={small} alt="" id="volume" />
      </picture>
      <div className="neo-text">
        <div className="neo-title">Dynamic Port 2.0</div>
        <div className="neo-desc">
          Полезный виджет встроенный в зону фронтальной камеры. <br />
          Он демонстрирует информацию о работе некоторых функций смартфона,
          <br />
          таких как входящие вызовы и сообщения, длительность звонков и
          аудиозаписи, а <br /> также подключение и процесс зарядки
        </div>
      </div>
    </div>
  );
};

export default NeoSecTwentyNine