import ContentSection from "./ContentSection";

const FourthBatterySection = () => {
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-6dypass-charge-1-ee0449ce.jpg";
  return (
    <ContentSection backImg={background} backPos="center">
      <div style={{ padding: "15vw 10vw" }}>
        <h1 className="pova-title">Технология безопасности аккумулятора STS</h1>
        <h2 className="pova-subtitle">Больше мощности, больше безопасности</h2>
        <p className="pova-desc" style={{width: "40%"}}>
          Технология STS предотвращает короткие замыкания, которые могут быть
          вызваны контактом между фольгой и анодом
        </p>
      </div>
    </ContentSection>
  );
};

export default FourthBatterySection;
