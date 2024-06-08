

const FlipSecFifteen = () => {
    const video =
      "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/zaHooc.mp4";
  return (
    <div className="flip-15">
      <div className="flip-text">
        <h1>
          Za-Hooc <br />
          Security Solution 4.0
        </h1>
        <p>Продвинутый алгоритм защиты конфиденциальных данных</p>
      </div>
      <video src={video} muted autoPlay loop></video>
    </div>
  );
}

export default FlipSecFifteen