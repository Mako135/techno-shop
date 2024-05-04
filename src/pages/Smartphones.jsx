import Slider from "../feautures/Slider";
import Title from "../components/text/Title";
import Phones from "../components/phones/Phones";
import Filter from "../feautures/Filter";
import Footer from "../components/footer/Footer";
const Smartphones = () => {
  return (
    <div className="smartphones">
      <div className="container">
        <Slider />
        <Title text="Наши смартфоны" />
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
