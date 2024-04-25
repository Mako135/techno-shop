import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/footer/Footer";

import banner2 from "../assets/banner2.png";
import RecommendedPhones from "../components/home/RecommendedPhones";
import Slider from "../feautures/Slider";
import HomeNews from "../feautures/HomeNews";
import Banner from "../components/banner/Banner";
import Title from "../components/text/Title";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <Slider />
        <Title text="Рекомендованные товары" />
        <div className="phones">
          <RecommendedPhones />
          <RecommendedPhones />
          <RecommendedPhones />
          <RecommendedPhones />
          <RecommendedPhones />
          <RecommendedPhones />
        </div>
        <Banner src={banner2} />
        <p className="title">Последние новости</p>
        <HomeNews />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
