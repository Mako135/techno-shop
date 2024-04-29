import DownloadCard from "./DownloadCard";
import support_img from '../../assets/support_img.jpg'

const Downloads = () => {
  return (
    <div>
      <div className="download-content">
          <p className='download-title'>Загрузки</p>
          <p className="download-subtitle">
            Загрузите необходимые ресурсы, такие как руководство пользователя,
            приложение HiOS и т. д.
              </p>
            <div className="download-cards">
                  <DownloadCard img={support_img} text={"Загрузки"} linkText={"Найти свою модель телефона "} link={"/"} />
                  <DownloadCard />
            </div>
      </div>
    </div>
  );
}

export default Downloads