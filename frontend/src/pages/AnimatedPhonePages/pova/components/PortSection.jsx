import ContentSection from "./ContentSection";

const PortSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-7dynamic-port-b607c214.jpg";
    return (
      <ContentSection backImg={background} backPos="top">
        <div className="port-section">
          <h1 className="pova-title">Dynamic Port 2.0</h1>
          <p className="pova-desc">
            Полезный виджет встроенный в зону фронтальной камеры. Он
            демонстрирует информацию о работе некоторых функций смартфона
          </p>
        </div>
      </ContentSection>
    );
}

export default PortSection