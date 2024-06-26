import Design from "./Design";

const GamePerfomance = () => {
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter3-1Experience-right-f737c6bf.png";
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter3-bg-b248311a.jpg";
  const mobile =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter3-bg-m-f78f65f0.jpg";
  return (
    <Design backImg={background} mobImg={mobile} frontImg={figure}>
      <h1 className="pova-title">
        Игровые возможности Отличная графика,
        <br /> отличный звук,
        <br /> отличная игра!
      </h1>
    </Design>
  );
};

export default GamePerfomance;
