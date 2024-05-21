import ShopCard from "../components/shop/ShopCard";
import kaspi from "../assets/kaspi.png";
import beeline from "../assets/beeline.png";
import technodom from "../assets/technodom.png";
import veter from "../assets/veter.png";
import fora from "../assets/fora.png";

const Shops = () => {
  return (
    <div className="container shop">
      <div className="shop-cards">
        <ShopCard
          img={kaspi}
          title="Каспи Магазин"
          link={"https://kaspi.kz/"}
        />
        <ShopCard
          img={technodom}
          title="Technodom"
          link={"https://technodom.kz/"}
        />
        <ShopCard img={veter} title="Белый Ветер" link={"https://veter.kz/"} />
        <ShopCard img={fora} title="Fora" link={"https://fora.kz/"} />
        <ShopCard img={beeline} title="Beeline" link={"https://beeline.kz/"} />
      </div>
    </div>
  );
};

export default Shops;
