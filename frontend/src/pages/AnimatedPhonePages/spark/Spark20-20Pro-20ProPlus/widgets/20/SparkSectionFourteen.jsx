import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SparkSectionFourteen = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-fourteen",
        start: "bottom center",
        end: "+=400",
        scrub: true,
        markers: true
      }
    });

    tl.to(".section-fourteen", {
      duration: 2,
      scale: 0.9,
      opacity: 0.7
    });
  }, []);
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/SPARK_20/en/new_1209/dist/png/sec13PcF2.png";
  return (
    <div className="section-fourteen">
      <img src={figure} alt="" />
      <div className="section-fourteen-content">
        <div className="text_wrapper left-7">
          <h2>Широкий экран с частотой обновления 90 Гц</h2>
          <h4>
            Редкий в сегменте экран с отдельным вырезом под фронтальную камеру
          </h4>
          <p>
            Дизайн смартфона стал еще более изящным благодаря отдельному
            отверстию для селфи-камеры, при этом полезная площадь экрана в
            соотношении с корпусом выросла до 90%. Адаптивная частота обновления
            90 Гц обеспечивает плавность, а функция Smart Refresh 3.0 позволяет
            автоматически переключаться со статического экрана в игровой режим,
            снижая энергопотребление на 3-5%
          </p>
        </div>
        <div className="datas right-7">
          <div className="right-data">
            <h5>120 Гц</h5>
            <span>Частота обновления</span>
          </div>
          <div className="right-data">
            <h5>6.8 LCD</h5>
            <span>Широкий экран</span>
          </div>
          <div className="right-data">
            <h5>Smart Refresh 3.0</h5>
            <span>Сбалансированное энергопотребление</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparkSectionFourteen;
