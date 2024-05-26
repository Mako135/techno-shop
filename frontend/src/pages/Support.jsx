import Footer from "../components/footer/Footer";
import Downloads from "../components/support/Downloads";
import MoreLink from "../components/link/MoreLink";
import Tabs from "../components/tabs/Tabs";
import Contact from "../components/support/Contact";
import { SUPPORT } from "../services/accordion/AccordionData";
const Support = () => {
  return (
    <div>
      <div className="support-banner">
        <div className="support-banner-content">
          <p className="support-title">Добро пожаловать в службу поддержки!</p>
          <p className="support-subtitle">Как мы можем вам помочь?</p>
          <MoreLink link="#contact" text="Написать нам" color="#fff" />
        </div>
      </div>

      <div className="container">
        <Tabs data={SUPPORT} />
        <Downloads />
        <div className="service-center">
          <p className="support-title">Авторизованные сервисные центры</p>
          <p className="support-subtitle">
            Список официальных поставщиков сервисных услуг Tecno
          </p>
          <MoreLink link="/" text="Найти сервисный центр" />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
