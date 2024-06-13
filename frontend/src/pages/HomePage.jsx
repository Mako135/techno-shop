import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/footer/Footer";

import banner2 from "../assets/banner2.png";
import Slider from "../feautures/Slider";
import HomeNews from "../components/home/HomeNews";
import Banner from "../components/banner/Banner";
import Title from "../components/text/Title";
import HomePhones from "../components/home/HomePhones";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Главная | Tecno";
  }, []);
  return (
    <div className="home">
      <div className="container">
        <Slider />
        <Title props="Рекомендованные товары" />
        <HomePhones />
        <Banner src={banner2} />
        <p className="title">Последние новости</p>
        <HomeNews />
        <div className="divider"></div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
