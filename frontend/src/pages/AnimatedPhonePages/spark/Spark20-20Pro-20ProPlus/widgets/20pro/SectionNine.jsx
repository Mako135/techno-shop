import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionNine = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-nine",
        start: "bottom center",
        end: "+=400",
        scrub: true,
        markers: true
      }
    });

    tl.to(".bg-green", {
      duration: 2,
        scale: 0.9,
      opacity: 0.7
    });
  }, []);

  const phone_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec9PcBlack.png";
  const phone_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec9PcIvory.png";
  const phone_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec9PcBlush.png";
  const phone_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec9PcMagicSkin.png";
  return (
    <div className="section-nine">
      <header>
        <div className="left-images">
          <img src={phone_1} alt="" />
          <img src={phone_2} alt="" />
          <img src={phone_3} alt="" />
          <img src={phone_4} alt="" />
        </div>
        <div className="section-right2">
          <h3 className="section-right-title">Новая текстура корпуса</h3>
          <p className="section-right-subtitle">Гармония стиля и мощности</p>
          <p className="section-right-subtitle">
            Выберите свой SPARK: <br />
            Белая заря 一 игра света и тени <br />
            Золотой закат 一 блеск благородного металла
          </p>

          <div className="sec-nine-datas">
            <div className="data">
              <h4>Композитный пластик</h4>
              <p>Изящный матовый корпус</p>
            </div>
            <div className="data">
              <h4>Glitter Sand 2.0</h4>
              <p>Переливающийся эффект</p>
            </div>
            <div className="data">
              <h4>Трендовые цвета</h4>
              <p>Яркие и спокойные оттенки</p>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="left-3">
          <h2 className="section-right-title">
            Защита от пыли <br /> и влаги IP53
          </h2>
          <p className="section-right-subtitle">
            Ни брызги воды, ни частицы пыли не страшны благодаря защите
            смартфона по стандарту IP53. Еще больше комфорта с вашим новым SPARK
          </p>
        </div>
        <div className="right-3">
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/png/sec9PcF2.png"
            alt=""
          />
          <div className="right-3-title">IP53</div>
          <div className="right-3-desc">Water & Dust Proof</div>
        </div>
      </footer>
    </div>
  );
};

export default SectionNine;
