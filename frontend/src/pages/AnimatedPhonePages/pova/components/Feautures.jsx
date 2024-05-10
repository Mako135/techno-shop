import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const Feautures = () => {
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "-=200px center",
        end: "+=200",
        markers: true,
        onEnter: () => {
          console.log(1); // выводит число 1 в консоль при срабатывании анимации
        }
      }
    });

    // Таймлайн с задержкой 0.3 секунды
    tl.from("#card", {
      y: 100,
      opacity: 0,
      stagger: 0.2
    }).to("#card1", {
      y: 0,
      opacity: 1,
      duration: 0.2
    });
  }, []);

  return (
    <div
      id="features"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        width: "80vw",
        margin: "0 auto"
      }}
    >
      <div id="card">
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-1-2be3a59d.jpg"
          title="Технологичный дизайн"
        />
      </div>
      <div id="card">
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
      <div id="card">
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
      <div id="card">
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
    </div>
  );
};

export default Feautures;
