import ContentSection from "./ContentSection";

const WaterSave = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-7waterproof-bg-c4f3e09c.jpg";
  return (
    <ContentSection backImg={background}>
      <div className="water-save">
        <h1 className="pova-title">Предупреждение о наличии влаги в гнезде зарядки</h1>
        <h3 className="pova-subtitle">В порт для зарядки попала вода?</h3>
        <p className="pova-desc">Смартфон предупредит об этом с помощью уведомления на экране</p>
      </div>
      
    </ContentSection>
  );
}

export default WaterSave