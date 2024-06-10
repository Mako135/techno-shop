import Slider from "../../feautures/Slider";
import Title from "../../components/text/Title";
import Phones from "../../components/phones/Phones";
import Filter from "../../feautures/Filter";
import Footer from "../../components/footer/Footer";
import MoreLink from "../../components/link/MoreLink";
import MobileFilter from "../../components/filter/MobileFilter";
const Smartphones = () => {
  return (
    <div className="smartphones">
      <div className="container">
        <Slider />
        <div className="smartphone-title">
          <Title text="Наши смартфоны" />
          <div className="smartphone-title-link">
            <MoreLink text="Сравнить модели" color={"#0264FA"} link={'compare'} />
          </div>
        </div>
        <MobileFilter />
        <section className="smartphones-content">
          <Filter />
          <Phones />
        </section>
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Smartphones;