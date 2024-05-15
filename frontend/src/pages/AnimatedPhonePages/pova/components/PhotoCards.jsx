import ContentSection from './ContentSection'

const PhotoCards = () => {
    const background =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-3mp-end-53e1d38d.jpg";
    const figure_1 =
        "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-3MP-2-fbdb4ee7.png";
    const figure_2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter5-3MP-1-b3cc0df1.png";
    return <ContentSection backImg={background} backPos='bottom'>
      <div className="photo-cards">
        <div className="photo-card">
          <img src={figure_1} alt="" />
        </div>
        <div className="photo-card">
          <img src={figure_2} alt="" />
        </div>
      </div>
  </ContentSection>;
}

export default PhotoCards