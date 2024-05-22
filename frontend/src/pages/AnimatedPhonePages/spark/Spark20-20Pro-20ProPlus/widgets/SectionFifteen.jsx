const SectionFifteen = () => {
  const icon_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon1.png";
  const icon_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon6.png";
  const icon_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon2.png";
  const icon_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon7.png";
  const icon_5 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon3.png";
  const icon_6 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcIcon5.png";

  const video_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV1.mp4";
  const video_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV2.mp4";
  const video_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV3.mp4";
  const video_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV4.mp4";
  const video_5 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV5.mp4";
  const video_6 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec14PcV7_2.mp4";
  return (
    <div className="section-fifteen">
      <img
        src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec14PcHios.png"
        alt=""
        className="section-fifteen-figure"
      />

      <div className="spark-margin">
        <div className="spark-content">
          <video src={video_1} muted autoPlay className="left-2"></video>
          <div className="right-8">
            <img src={icon_1} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>Умный виджет Dynamic Port</h2>
              <h4>Всегда готов к работе</h4>
              <p>
                Dynamic Port — собственная разработка TECNO, которая
                предоставляет пользователю доступ к виджетам в новом удобном
                формате. Теперь сообщения, элементы интерфейса и важная
                информация отображаются в интерактивной шторке в области
                фронтальной камеры
              </p>
            </div>
          </div>
        </div>
        {/* VIDEO CARD 1 END */}

        {/* VIDEO CARD 2 START */}
        <div className="spark-content">
          <div className="right-8">
            <img src={icon_2} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>4G+ улучшенная скорость</h2>
              <h4>Быстрая загрузка и стабильное соединение</h4>
              <p>
                Подобно движению по автостраде с двумя полосами, технология 4G+
                использует два сетевых канала для увеличения скорости загрузки
                на 130%. Значительный прирост скорости наблюдается даже при
                слабом сигнале сети и перегруженном Wi-Fi
              </p>
            </div>
          </div>
          <video src={video_2} muted loop autoPlay className="left-2"></video>
        </div>
        {/* VIDEO CARD 2 END */}

        {/* VIDEO CARD 3 START */}
        <div className="spark-content">
          <video src={video_3} muted loop autoPlay className="left-2"></video>
          <div className="right-8">
            <img src={icon_3} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>Интеллектуальное ускорение Интернета</h2>
              <h4>Комфортная работа в сети с функцией Multi-Boost</h4>
              <p>
                Улучшаем качество связи! Интеллектуальный двойной канал
                мгновенно определяет лучшее качество соединения между Wi-Fi и
                мобильным интернетом, благодаря чему возрастает скорость
                загрузки приложений и файлов на 25%. Умный режим доступа к сети
                выделяет приоритетные задачи во время работы, что еще больше
                ускоряет интернет-соединение
              </p>
              <div className="datas">
                <div className="data">
                  <h4>Интеллектуальный двойной канал</h4>
                  <p>Оптимизация Wi-Fi и сотовых данных</p>
                </div>
                <div className="data">
                  <h4>Умный режим доступа к сети</h4>
                  <p>Полный контроль скорости</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spark-content">
          <div className="right-8">
            <img src={icon_4} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>Динамичные обои</h2>
              <h4>Создайте уникальный стиль</h4>
              <p>
                Искусственный интеллект снова удивляет: на этот раз с помощью
                динамичных обоев. Просто введите в поиске ключевое слово и
                наблюдайте, как технологии визуализируют воображение
              </p>
            </div>
          </div>
          <video src={video_4} muted loop autoPlay className="left-2"></video>
        </div>
        <div className="spark-content">
          <video src={video_5} muted loop autoPlay className="left-2"></video>
          <div className="right-8">
            <img src={icon_5} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>Умные советы</h2>
              <h4>Ваш помощник в эпоху нейросетей</h4>
              <p>
                Познакомьтесь с обновленным AI-помощником. Он стал еще умнее и
                круче: управляет расписанием, продумывает предложения,
                напоминает о делах заранее и многое другое
              </p>
            </div>
          </div>
        </div>
        <div className="spark-content">
          <video src={video_6} muted loop autoPlay className="left-2"></video>
          <div className="right-8">
            <img src={icon_6} alt="" className="right-8-icon" />
            <div className="text_wrapper">
              <h2>Турбо соцсеть</h2>
              <h4>Общайтесь и развлекайтесь</h4>
              <p>
                Общайтесь по-новому! С функцией Турбо соцсеть вы можете
                накладывать фильтры, бьютификацию и различные аватары во время
                видеозвонков в WhatsApp. Помимо этого Турбо соцсеть позволяет
                изменять голос, чтобы добавить изюминку любой беседе
              </p>
              <div className="data" style={{ marginTop: "5vw" }}>
                <h4>Бьютификация и мейкап</h4>
                <h4>Заполняющая подсветка</h4>
                <h4>Аватары в дополненной реальности</h4>
                <h4>Изменение голоса</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="tips">
        *Вся информация на данной странице предоставлена TECNO LAB на основании
        лабораторных тестов <br /> *Все изображения видео и текст на данной
        странице представлены исключительно для ознакомления и могут отличаться
        от <br />
        реального продукта <br /> *Указанные данные предоставлены по результатам
        лабораторных тестирований продукта, в том числе в сравнении с
        предыдущими моделями.Реальные данные могут отличаться в зависимости от
        конфигураций, технических особенностей и условий использования
        конкретного устройства. Пожалуйста, ориентируйтесь на данные в реальных
        условиях использования.
      </p>
    </div>
  );
};

export default SectionFifteen;
