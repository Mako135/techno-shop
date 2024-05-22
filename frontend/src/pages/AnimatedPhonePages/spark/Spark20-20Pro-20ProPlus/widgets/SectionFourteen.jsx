import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionFourteen = () => {
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
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/jpg/sec13PcF2.jpg";
  return (
    <div className="section-fourteen">
      <img src={figure} alt="" />
      <div className="section-fourteen-content">
        <div className="text_wrapper left-7">
          <h2>120 Гц LCD-экран</h2>
          <h4>Новое слово в своем классе</h4>
          <p>
            Широкий экран с повышенной частотой обновления 120 Гц и отдельным
            вырезом под селфи-камеру занимает 91% площади корпуса, что
            многократно улучшает визуальное восприятие во время использования
            смартфона. А функция Smart Refresh 3.0 адаптируется к
            пользовательским сценариям и снижает энергопотребления на 3-5%
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

export default SectionFourteen;
