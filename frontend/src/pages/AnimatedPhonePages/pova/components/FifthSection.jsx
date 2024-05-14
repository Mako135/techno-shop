import Design from "./Design";

const FifthSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-bg-a8103985.jpg";
    const figure =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-14hios-a4cc95fb.png";
  return (
    <Design backImg={background} frontImg={figure}>
      <h1 className="fifth-section-title">Система HiOS 14</h1>
    </Design>
  );
}

export default FifthSection