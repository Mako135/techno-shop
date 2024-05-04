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
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "70vh",
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}
        >
          <img
            src={slogan}
            alt="Small Image"
            style={{ width: "200px", height: "auto", marginBottom: "30px" }}
          />
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