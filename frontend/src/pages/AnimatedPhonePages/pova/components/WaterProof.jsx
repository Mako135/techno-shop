import ContentSection from './ContentSection'

const WaterProof = () => {
    const background = "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-4Map-271cd7f2.jpg"
    return (
      <ContentSection backImg={background} backPos='top' >
        <h1 className="pova-title water-proof-title">Защита от пыли и влаги IP53</h1>
      </ContentSection>
    );
}

export default WaterProof