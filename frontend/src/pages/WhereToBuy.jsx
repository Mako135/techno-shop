import Banner from "../components/banner/Banner"
import banner2 from "../assets/banner2.png";
import Title from "../components/text/Title";
import Shops from "../feautures/Shops";
import Footer from "../components/footer/Footer";

const WhereToBuy = () => {
  return (
    <div>
      <div className="container">
        <Banner src={banner2} />
        <Title text="Онлайн магазины" />
        <Shops />
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
}

export default WhereToBuy