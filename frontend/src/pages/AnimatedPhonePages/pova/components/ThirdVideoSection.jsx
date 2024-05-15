const ThirdVideoSection = () => {
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-experience-fhd-v-f1959893.png";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-c4-chip.mp4";
  return (
    <div>
      <section style={{ marginTop: "7.8125vw" }}>
        <div className="video-container">
          <div>
            <h1 className="pova-title">Процессор MediaTek Dimensity 6080 5G</h1>
            <h3 className="pova-subtitle">
              Запредельная скорость для захватывающей игры
            </h3>
            <p className="pova-desc">
              Новый восьмиядерный процессор создан по 6 нм техпроцессу и оснащен
              движком HyperEngine 3.0 Lite, чтобы обеспечить быструю и плавную
              работу смартфона даже в требовательных играх
            </p>
          </div>
          <ul>
            <li>
              <img
                src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-media-i1-ffc6a74f.png"
                alt=""
              />
              <h3>Smart 5G 2.0</h3>
            </li>
            <li>
              <img
                src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-media-i2-620eab83.png"
                alt=""
              />
              <h3>Двойной канал 5G</h3>
            </li>
            <li>
              <img
                src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter4-media-i3-72d266ed.png"
                alt=""
              />
              <h3>Низкое энергопотребление</h3>
            </li>
          </ul>
          <footer>
            <img src={frame} alt="" />
            <video src={video} muted autoPlay></video>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default ThirdVideoSection;
