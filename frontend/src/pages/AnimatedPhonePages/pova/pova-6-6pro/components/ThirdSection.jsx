import Design from './Design';

const ThirdSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-bg-a273bf00.jpg";
    const figure =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-bg-right-522d7db4.png";
    return (
      <Design backImg={background} frontImg={figure}>
        <div className="third-section">
          <h1 className='pova-title'>Превосходная производительность</h1>
         
        </div>
      </Design>
    );
}

export default ThirdSection