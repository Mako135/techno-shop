
const SectionNine = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec11Pc.mp4";
  return (
    <div className="sec-9">
      <div className="icon_container">
        <div className="title">Чем больше памяти, тем меньше забот</div>
        <div className="icon icon5"></div>
      </div>
      <div className="sec-9_phone">
        <video src={video}></video>
        <div className="pic-1"></div>
      </div>
      <div className="sec-p_text"></div>
      <div className="left-circle"></div>
      <div className="right-circle">
        <div className="content_box">
          <div className="title">Больше памяти с функцией System Slimming</div>
          <div className="desc">
            Внушительный объем памяти позволит хранить коллекцию любимой музыки
            и фотографий без необходимости без конца освобождать место на диске.
            Увеличенная на 8 Гб оперативная память сделает работу со смартфоном
            еще более плавной и быстрой. Наслаждайтесь плавностью, скоростью и
            стабильной работой!
          </div>
          <div className="products">
            <div className="product">
              <div className="title">До 1 Тб</div>
              <div className="desc">Расширение хранилища</div>
            </div>
            <div className="product">
              <div className="title">До 16 Гб</div>
              <div className="desc">Расширение оперативной памяти</div>
            </div>
            <div className="product">
              <div className="title">System Slimming</div>
              <div className="desc">Функция глубокой очистки памяти</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tips">
        *Расширение памяти до 1 Тб доступно только с учетом использования карты
        памяти microSD соответствующего объема. *Фактический доступный объем
        встроенной памяти может отличаться в зависимости от версии устройства и
        предустановленного программного обеспечения. *Карта памяти microSD не
        входит в комплект поставки данного продукта и приобретается отдельно по
        желанию пользователя. *Объем ОЗУ до 16 Гб доступен с помощью расширения
        виртуальной оперативной памяти за счет постоянной встроенной памяти.
        *Изображения приведены только для ознакомления, реальный продукт может
        отличаться
      </div>
    </div>
  );
}

export default SectionNine