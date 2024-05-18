const FourSectionFirstContent = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec4PcV1.mp4";
  return (
    <div className="section-first-content">
      <header>
        <video src={video} muted autoPlay></video>
        <div className="section-right">
          <h2>108 Мп камера высокой четкости</h2>
          <p className="section-right-subtitle">Впервые в серии SPARK</p>
          <p className="section-right-desc">
            Запечатлейте мир в мельчайших подробностях с помощью камеры высокой
            четкости 108 Мп, которая выведет качество ваших фото на новый
            уровень. Сочетание встроенного сенсора с трехкратным увеличением и
            десятикратного цифрового зума обеспечивает безупречную четкость
            деталей на большом расстоянии. Широкая матрица 1/1.52” и диафрагма
            f/1.89 легко адаптируются к любому освещению. А режим HDR добавляет
            снимкам глубину и уравновешивает в кадре самые светлые и самые
            темные участки
          </p>
        </div>
      </header>
      <footer>
        <div>
          <h2>108 Мп</h2>
          <p>выдающееся качество</p>
        </div>
        <div>
          <h2>10X</h2>
          <p>цифровой зум</p>
        </div>
        <div>
          <h2>HDR</h2>
          <p>улучшенная детализация</p>
        </div>
        <div>
          <h2>1/1.52</h2>
          <p>размер матрицы</p>
        </div>
        <div>
          <h2>6 линз</h2>
          <p>высокая светопроницаемость</p>
        </div>
        <div>
          <h2>3X</h2>
          <p>оптический зум</p>
        </div>
        <div>
          <h2>f/1.89</h2>
          <p>широкая диафрагма</p>
        </div>
      </footer>
    </div>
  );
};

export default FourSectionFirstContent;
