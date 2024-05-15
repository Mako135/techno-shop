import ContentSection from "./ContentSection";

const SecondAudioSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-9ai-e14a50d6.jpg";
  return (
    <ContentSection backImg={background} backPos="top">
      <section className="audio-header">
        <h1 className="pova-title">AI-шумоподавление во время звонка</h1>
        <h3 className="pova-subtitle">Чистый звук в любом месте и в любое время</h3>
        <p className="pova-desc">
          POVA 6 Pro 5G благодаря микрофону и алгоритмам шумоподавления
          эффективно отфильтровывает внешние шумы, будь то гул улиц, ветер или
          звук дождя, чтобы собеседник услышал вас в любых условиях разговора
        </p>
      </section>
    </ContentSection>
  );
}

export default SecondAudioSection