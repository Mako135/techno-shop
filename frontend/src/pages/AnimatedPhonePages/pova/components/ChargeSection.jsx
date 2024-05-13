import ContentSection from './ContentSection'

const ChargeSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter2-cold-bg-5e8663f8.jpg";
    return (
      <ContentSection backImg={background}>
        <div className="charge-section">
          <h1 className="pova-title">Заряжается даже при -20°C</h1>
          <h3 className="pova-subtitle">Не боится холода</h3>
          <p className="pova-desc">
            Аккумулятор POVA 6 выдерживает экстремальные зимние температуры и
            эффективно заряжается даже в мороз
          </p>
        </div>
        
      </ContentSection>
    );
}

export default ChargeSection;