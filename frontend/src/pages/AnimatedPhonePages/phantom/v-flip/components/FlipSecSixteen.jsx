const FlipSecSixteen = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/splitScreenSection/phone.png";
  return (
    <div className="flip-16">
      <img src={figure} alt="" />
      <div className="flip-text">
        <h1>Разделение <br /> экрана</h1>
        <p>
          Раздели экран для <br /> двух приложений одновременно
        </p>
      </div>
    </div>
  );
};

export default FlipSecSixteen;
