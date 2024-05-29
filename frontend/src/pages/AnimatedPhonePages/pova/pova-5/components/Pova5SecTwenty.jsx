
const Pova5SecTwenty = () => {
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-double-view.mp4";
  return (
    <div className="sec-20">
      <div className="pova-text">
        <h1>СНИМАЙ НА ОБЕ КАМЕРЫ ОДНОВРЕМЕННО</h1>
        <h3>Новая фишка твоего влога!</h3>
        <p>
          Еще больше эмоций в режиме Двойное видео с одновременной съемкой на
          основную и фронтальную камеру. Раскрой творческий потенциал и создавай
          классные ролики в любом месте и в любое время
        </p>
      </div>
      <video src={video}></video>
    </div>
  );
}

export default Pova5SecTwenty