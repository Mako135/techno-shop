import ContentSection from './ContentSection';

const WallpaperSection = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter6-2curate-bg-f033742a.jpg";
    return (
      <ContentSection backImg={background}>
        <div className="wallpaper-section">
          <h1 className='pova-title'>Живые обои</h1>
          <h2 className='pova-subtitle'>Целый динамичный мир на экране смартфона</h2>
          <p className='pova-desc'>
            Настройте динамические обои на свой вкус. Кастомизируйте экран
            блокировки или включите режим Always on Display. В ваших руках целая
            коллекция изображений, цветов и форм
          </p>
        </div>
      </ContentSection>
    );
}

export default WallpaperSection