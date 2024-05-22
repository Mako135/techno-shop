import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PlusSectionNine = () => {
  useLayoutEffect(() => {
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
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec9PcF1.webp";
  const phone_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec9PcF2.webp";
  const phone_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec9PcF3.webp";
  const phone_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/SPARK_20_Pro_Plus/dist/images/sec9PcF4.webp";
  return (
    <div className="section-nine">
      <header>
        <div className="left-images-2">
          <img src={phone_1} alt="" />
          <img src={phone_2} alt="" />
          <img src={phone_3} alt="" />
          <img src={phone_4} alt="" />
        </div>
        <div className="section-right2">
          <h3 className="section-right-title">Сияющий эффект</h3>
          <p className="section-right-subtitle">
            Красота снаружи, технологии внутри
          </p>
          <p className="section-right-subtitle">
            Зеленая планета (экокожа Magic Skin 2.0)- <br />
            приятный природный цвет зернистой экокожи с прострочкой напоминает
            отделку салона дорогой яхты. В пять раз более износостойкое покрытие
            корпуса и на 25% лучше защищенное от воздействия ультрафиолета по
            сравнению с аналогичным материалом предыдущего поколения
          </p>

          <div className="sec-nine-datas">
            <div className="data">
              <h4>Матовая экокожа</h4>
              <p>приятная на ощупь</p>
            </div>
            <div className="data">
              <h4>Экологичный материал</h4>
              <p>искусственная экокожа</p>
            </div>
            <div className="data">
              <h4>Прочно и устойчиво</h4>
              <p>к загрязнениям и повреждениям</p>
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

export default PlusSectionNine;
