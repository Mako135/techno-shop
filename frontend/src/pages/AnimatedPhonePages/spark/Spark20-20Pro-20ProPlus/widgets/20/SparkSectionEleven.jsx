const SparkSectionEleven = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/video/sec11PcV1.mp4";
  return (
    <div className="section-eleven">
      <div className="section-eleven-titles">
        <p>
          <span>Еще быстрее</span>
        </p>
        <p>
          <span>и эффективнее</span>
        </p>
      </div>
      <div className="section-eleven-spark">
        <div className="section-left-4">
          <video src={video} muted autoPlay loop></video>
        </div>
        <div className="section-right-4">
          <h2 className="section-right-title">Процессор Helio G99</h2>
          <p className="section-right-subtitle">Один из лучших 4G-чипов</p>
          <p className="section-right-desc">
            Ощутите мощь одного из лучших процессоров в своем классе 一 Helio
            G99. Привыкайте к быстрой, плавной и бесперебойной работе смартфона
          </p>
          <div className="eleven-datas">
            <h3>2*Cortex-A76 @2.2 Ггц</h3>
            <h3>6*Cortex-A55 @2.0 Ггц</h3>
            <h3>Mali-G57 MC2</h3>
          </div>
        </div>
      </div>
      <div className="section-eleven-second-block m-top">
        <div className="left-4">
          <h2 className="section-right-title">
            Продвинутая производительность
          </h2>
          <p className="section-right-subtitle">с двумя движками</p>
          <p className="section-right-desc">
            Новое программное ускорение. Движок Aurora Engine на базе
            искусственного интеллекта повышает скорость запуска популярных игр
            на 85%, а приложений на 95%. Глубокая оптимизация Darwin Engine
            увеличивает частоту кадров в 8 раз и снижает среднюю температуру
            процессора на 4°, что обеспечивает комфортную игру и минимальный
            нагрев
          </p>
        </div>

        <div className="right-4">
          <video src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec11PcV2.mp4"></video>
          <div className="right-4-title">
            <h3>Aurora Engine 2.0</h3>
            <p>новые рекорды скорости</p>
          </div>
          <div className="right-4-title-2">
            <h3>Darwin Engine 2.0</h3>
            <p>оптимизация игр</p>
          </div>
        </div>
      </div>

      <div className="section-eleven-third-block">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec11PcF3.png"
          alt=""
        />
        <div className="third-block-content">
          <div className="left-5">
            <h3 className="section-right-title">Память 256 Гб + 21 Гб</h3>
            <p className="section-right-subtitle">
              Много памяти. Еще больше возможностей
            </p>
            <p className="section-right-desc">
              Сохраните любимые фото и видео с расширенным хранилищем данных и
              увеличьте объем оперативной памяти до 21 Гб с функцией Memory
              Fusion
            </p>
          </div>
          <div className="right-5">
            <div>
              <h3>256 Гб</h3>
              <p>Объем памяти</p>
            </div>
            <div>
              <h3>До 21 Гб ОЗУ</h3>
              <p>Memory Fusion</p>
            </div>
            <div>
              <h3>System Slimming</h3>
              <p>Глубокая очистка памяти</p>
            </div>
          </div>
        </div>
      </div>

      <div className="spark-eleven-fourth-block">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/png/sec11PcF4.png"
          alt=""
        />
        <div className="box">
          <div className="left-6" style={{marginRight: "9.1145833333vw"}}>
            <h2 className="section-right-title">
              Энергоемкий аккумулятор 5000 мАч Быстрая зарядка 18 Вт (Type-C)
            </h2>
            <p className="section-right-subtitle">
              Выдающаяся выносливость и быстрое восстановление
            </p>
            <p className="section-right-desc">
              Энергоемкий аккумулятор 5000 мАч с длительным сроком службы
              батареи и быстрая зарядка 18 Вт в комплекте обеспечат долгое время
              работы и быстрое восстановление энергии
            </p>
          </div>
          <div className="right-6">
            <div className="datas" style={{ width: "200px" }}>
              <div className="data">
                <h2>5000 мАч</h2>
                <p>энергоемкий аккумулятор</p>
              </div>
              <div className="data">
                <h2>18 Вт</h2>
                <p>быстрая зарядка</p>
              </div>
              <div className="data">
                <h2>Type-C</h2>
                <p>разъем зарядки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparkSectionEleven;
