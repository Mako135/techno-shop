import Banner from "../components/banner/Banner"
import banner2 from "../assets/banner2.png";
import Title from "../components/text/Title";
import Shops from "../feautures/Shops";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

const WhereToBuy = () => {
  useEffect(() => {
    document.title = "Где купить | Tecno";
  }, []);
  return (
    <div>
      <div className="container">
        <Banner src={banner2} />
        <Title props="Онлайн магазины" />
        <Shops />
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
}

export default WhereToBuy