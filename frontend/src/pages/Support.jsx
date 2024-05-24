import banner from '../assets/support_banner.png'
import Footer from '../components/footer/Footer';
import SupportTabs from '../components/support/SupportTabs';
import Downloads from '../components/support/Downloads';
import MoreLink from '../components/link/MoreLink';
const Support = () => {

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "70vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px"
          }}
        >
          <p className="support-title">Добро пожаловать в службу поддержки!</p>
          <p className="support-subtitle">Как мы можем вам помочь?</p>
          <MoreLink link="/" text="Написать нам" color="#fff"/>
        </div>
      </div>

      <div className="container">
        <SupportTabs />
        <Downloads />
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Support