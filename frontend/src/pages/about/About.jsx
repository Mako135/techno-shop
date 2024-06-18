import banner1 from "../../assets/aboutBanner.png";
import slogan from "../../assets/slogan.png";
import aboutBanner2 from "../../assets/aboutBanner2.jpg";
import AboutMain from "../../components/about/AboutMain";
import History from "../../components/history/History";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import AboutSlogan from "../../components/about/AboutSlogan";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "О Tecno | Tecno";
  }, []);
  return (
    <div className="about-page">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="centered-content">
          <img src={slogan} alt="Small Image" className="slogan-image" />
        </div>
      </div>
      <div className="container">
        <AboutMain />
        <div className="about-page-slogan">
          <AboutSlogan />
          <Banner src={aboutBanner2} />
        </div>
        <div id="history-block">
          <History />
        </div>
      </div>
      <Footer className="white" />
    </div>
  );
};

export default About;
