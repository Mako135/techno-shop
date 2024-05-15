import ContentSection from "./ContentSection";

const LastSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-9pcconnection-e8f2e185.jpg";
    return (
      <ContentSection backImg={background}>
        <div className="last-section">
          <h1 className="pova-title">Подключение к ПК</h1>
          <h3 className="pova-subtitle">Объедините экраны нескольких устройств</h3>
          <p className="pova-desc" style={{marginTop: "30vw"}}>
            Сделайте работу и перенос файлов еще более быстрыми и удобными.
            Легким движением можно отобразить экран смартфона на компьютере.
            Теперь вы можете даже смотреть видео на большом экране
            предварительно запустив его на смартфоне
          </p>
        </div>
      </ContentSection>
    );
}

export default LastSection