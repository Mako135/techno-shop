import Design from "./Design";

const FirstContent = () => {
    const Background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/section-02-bg-cdd40d2e.jpg";
    const Front =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-cover-c1f9f06b.png";
  return (
    <Design backImg={Background} frontImg={Front} width="600">
      <div>
        <h1 id="title">
          Технологичный <br /> дизайн
        </h1>
        <h2 id="subtitle">
          Знания,
          <br /> технологии, будущее
        </h2>
      </div>
      <p id="desc">
        Футуристичный дизайн POVA 6 Pro 5G был вдохновлен высокими технологиями,
        искусственным интеллектом и эстетикой научной фантастики. Добро
        пожаловать в мир, где искусство и техника слились воедино!
      </p>
    </Design>
  );
}

export default FirstContent