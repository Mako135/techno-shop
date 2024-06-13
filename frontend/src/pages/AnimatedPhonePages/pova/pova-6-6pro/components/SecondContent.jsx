import Design from './Design';

const SecondContent = () => {

    const Background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-bg-6f034af2.jpg";
    const Front =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-eletricity-9ba64574.png";
  const mobile = "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-bg-m-7ba2106e.jpg"
  return (
    <Design backImg={Background} mobImg={mobile} frontImg={Front} width="400">
      <div>
        <h1 id="title">Выдающаяся выносливость</h1>
        <h2 id="subtitle">Рекордное время работы без подзарядки</h2>
      </div>
    </Design>
  );
}

export default SecondContent;