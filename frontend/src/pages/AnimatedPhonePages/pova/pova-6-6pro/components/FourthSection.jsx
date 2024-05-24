import Design from "./Design";

const FourthSection = () => {
    const figure =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-1Ultra-right-a53466a4.png";
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-1Ultra-bg-c1a569c9.jpg";
  return (
    <Design backImg={background} frontImg={figure}>
      <h1 className="pova-title"> Яркие фото и видео</h1>
      <h3 className="pova-title"> Первый смартфон POVA с камерой 108 Мп</h3>
    </Design>
  );
}

export default FourthSection