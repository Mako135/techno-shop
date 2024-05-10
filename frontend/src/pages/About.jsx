import banner1 from '../assets/aboutBanner.png'
import slogan from "../assets/slogan.png";
import MoreLink from "../components/link/MoreLink";
import Banner from '../components/banner/Banner'
import aboutBanner2 from '../assets/aboutBanner2.jpg'
import AboutMain from '../components/about/AboutMain';
import History from '../components/history/History';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <div className="about-page">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="centered-content">
          <img src={slogan} alt="Small Image" className="slogan-image" />
          <MoreLink link="/shop" color="white" text="Посмотреть" />
        </div>
      </div>
      <div className="container">
        <AboutMain />
        <Banner src={aboutBanner2} />
        <History />
      </div>
      <Footer className="white" />
    </div>
  );
}

export default About