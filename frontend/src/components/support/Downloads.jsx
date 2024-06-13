import DownloadCard from "./DownloadCard";
import support_img from "../../assets/support_img.png";
import support_img2 from "../../assets/support_img2.jpg";

const Downloads = () => {
  return (
    <div>
      <div className="download-content">
        <p className="download-title">Загрузки</p>
        <p className="download-subtitle">
          Загрузите необходимые ресурсы, такие как руководство <br />{" "}
          пользователя, приложение HiOS и т. д.
        </p>
        <div className="download-cards">
          <DownloadCard
            img={support_img}
            text={"Загрузки"}
            linkText={"Найти свою модель телефона "}
            link={"/download"}
            color="white"
          />
          <DownloadCard
            img={support_img2}
            text={"Загрузить приложения"}
            linkText={"Посмотреть каталог приложений "}
            link={"https://play.google.com/store/apps?hl=ru"}
          />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
