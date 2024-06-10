import ContentSection from "./ContentSection";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BatterySection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".battery-container",
        start: "top center",
        end: "+=300",
        markers: true
      }
    });

    tl.from(".battery-container", {
      y: 100,
      opacity: 0.5,
      stagger: 0.2
    });
  }, []);
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter1-section1-body-74b06da9.jpg";

  return (
    <div>
      <ContentSection backImg={background} backPos="top">
        <div className="battery-container">
          <div className="battery-header">
            <p>Кто сказал, что тонкий корпус и большая батарея несовместимы?</p>
            <h2>7.88 мм корпус, 6000 мАч аккумулятор</h2>
          </div>
          <p className="battery-footer">
            Новая технология производства аккумуляторов позволила создать тонкий
            корпус самого смартфона: POVA 6 на 12.4% тоньше и на 8.6% легче, чем
            модель предыдущего поколения. При этом смартфон сохранил энергоемкую
            батарею 6000 мАч!
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default BatterySection;
