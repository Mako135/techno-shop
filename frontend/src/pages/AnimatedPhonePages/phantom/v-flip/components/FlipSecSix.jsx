import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecSix = () => {
  const flipRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
        markers: true
      }
    });

    tl.from("#flip-video-2", {
      scale: 2
    }).from("#flip-6 h1,#flip-6 li", {
      y: 50,
      opacity: 0,
      stagger: 0.2
    });
  }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/hinge/hinge.mp4";
  return (
    <div className="flip-6" id="flip-6" ref={flipRef}>
      <div className="flip-6-content">
        <h1>
          Экран без складок. Легкое открытие. <br />
          Никаких зазоров в сложенном виде
        </h1>
        <video src={video} muted autoPlay loop id="flip-video-2"></video>
        <ul>
          <li>
            <div className="dot"></div>
            <p>≤0.11 мм глубина складки экрана</p>
          </li>
          <li>
            <div className="dot"></div>
            <p>
              Фиксированные углы раскрытия <br />
              от 30° до 150°
            </p>
          </li>
          <li>
            <div className="dot"></div>
            <p>Выдерживает более 200 000 раскладываний</p>
          </li>
          <li>
            <div className="dot"></div>
            <p>Материалы из аэрокосмической отрасли: прочные и гибкие</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlipSecSix;
