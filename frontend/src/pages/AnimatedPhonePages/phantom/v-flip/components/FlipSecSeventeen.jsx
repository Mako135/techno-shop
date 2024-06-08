const FlipSecSeventeen = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/lightingSection/phone.png";
  const chat =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/lightingSection/left.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/lightingSection/right.png";
  return (
    <div className="flip-17">
      <img src={figure} alt="" className="flip-17-phone" />
      <img src={chat} alt="" className="flip-17-chat" />
      <img src={video} alt="" className="flip-17-video" />
      <div className="flip-text">
        <h1>
          Многооконный <br /> режим
        </h1>
        <p>Будь еще эффективнее</p>
      </div>
    </div>
  );
};

export default FlipSecSeventeen;
