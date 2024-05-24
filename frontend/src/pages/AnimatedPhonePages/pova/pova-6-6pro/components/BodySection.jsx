import ContentSection from "./ContentSection";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BodySection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".body-container",
        start: "top center",
        end: "+=300",
        markers: true
      }
    });

    tl.from(".body-header", {
      y: 100,
      opacity: 0.5,
      stagger: 0.2
    })
      .to(".body-header", {
        y: 0,
        opacity: 1,
        duration: 0.2
      })
      tl.from(".body-footer", {
        y: 100,
        opacity: 0.5,
        stagger: 0.2
      })
      .to(".body-header", {
        y: 0,
        opacity: 1,
        duration: 0.2
      });
  }, []);
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-section2-light-146b13f9.jpg";
  const first =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-3light-i1-50d07305.png";
  const second =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-3light-i2-5ef60df4.png";
  const third =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-3light-i3-68fab59d.png";
  return (
    <div>
      <ContentSection backImg={background} backPos="center">
        <div className="body-container">
          <div className="body-header">
            <h2 className="body-title">Светодиодная подсветка корпуса</h2>
            <p className="body-subtitle">Создайте свой сценарий</p>
            <p className="body-desc">
              116 независимых диодов образуют завораживающую подсветку с
              эффектом MiniLED, которую вы можете настроить индивидуально.
              Создайте свои режимы световых эффектов для звонков, сообщений,
              игр, индикатора зарядки, передачи файлов и т.д.
            </p>
          </div>
          <div className="body-footer">
            <div className="body-feature-card">
              <img src={first} alt="" />
              <p>108 комбинаций световых эффектов</p>
            </div>
            <div className="body-feature-card">
              <img src={second} alt="" />
              <p>116 светодиодов MiniLED</p>
            </div>
            <div className="body-feature-card">
              <img src={third} alt="" />
              <p>Динамичный дизайн</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default BodySection;
