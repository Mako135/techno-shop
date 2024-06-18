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
          link="https://kaspi.kz/shop/p/tecno-phantom-v-flip-5g-8-gb-256-gb-sirenevyi-115769335/?c=750000000&m=30027663&sr=23&ref=shared_link"
        />
        <ShopCard
          img={technodom}
          title="Technodom"
          link="https://www.technodom.kz/catalog/smartfony-i-gadzhety/smartfony-i-telefony/smartfony/f/brands/tecno"
        />
        <ShopCard
          img={veter}
          title="Белый Ветер"
          link="https://shop.kz/offers/smartfony/filter/fltr_brand-is-tecno_mobile/apply/"
        />
        <ShopCard
          img={fora}
          title="Fora"
          link="https://fora.kz/collection/smartfony"
        />
        <ShopCard
          img={beeline}
          title="Beeline"
          link="https://shop.beeline.kz/ru/almaty/c/smartphones"
        />
      </div>
    </div>
  );
};

export default Shops;
