import ContentSection from "./ContentSection"


const SecondGameSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-4game-bg-66742775.jpg";
  return (
    <ContentSection backImg={background} backPos="top">
      <div className="game-section">
        <h1 className="pova-title">Game Space 4.0</h1>
        <h3 className="pova-subtitle">Отдельное пространство для комфортной игры</h3>
        <p className="pova-desc">
          Последняя версия Game Control Panel автоматически настраивает
          графический процессор под игровой режим вместе с сенсорным управлением
          и режимом энергосбережения. Режим полностью контролирует оперативную и
          основную память, работу процессора, сеть, питание и температуру
        </p>
      </div>
    </ContentSection>
  );
}

export default SecondGameSection