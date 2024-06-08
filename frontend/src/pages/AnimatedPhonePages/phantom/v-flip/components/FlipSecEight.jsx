

const FlipSecEight = () => {
    
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/quickReplySection/picture.jpg";

  return (
    <div className="flip-8">
      <div className="flip-8-content">
        <div className="flip-text">
          <h1>Быстрый ответ</h1>
          <p>
            Отвечай на сообщения <br /> мгновенно, не <br />
            раскрывая смартфон
          </p>
        </div>
        <img src={figure} alt="" />
      </div>
    </div>
  );
};

export default FlipSecEight;
