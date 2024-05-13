import Design from './Design';

const SecondContent = () => {

    const Background =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-bg-6f034af2.jpg";
    const Front =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-eletricity-9ba64574.png";

  return (
    <Design backImg={Background} frontImg={Front} width='400'>
      <div>
        <h1 id="title">Выдающаяся выносливость</h1>
        <h2 id="subtitle">Рекордное время работы без подзарядки</h2>
      </div>
    
    </Design>
  );
}

export default SecondContent;