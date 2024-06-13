import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecTwelve = () => {
  const flipRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
      }
    });

    tl.from("#flip-video-3", {
      scale: 2
    }).from("#flip-12 h1,#flip-12 li", {
      y: 50,
      opacity: 0,
      stagger: 0.2
    });
  }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/behaviorSection/wallpaper.mp4";
  return (
    <div className="flip-12" ref={flipRef}>
      <div className="flip-6" id="flip-12">
        <div className="flip-6-content">
          <h1>
            Экран без складок. Легкое открытие. <br />
            Никаких зазоров в сложенном виде
          </h1>
          <video src={video} muted autoPlay loop id="flip-video-3"></video>
          <ul>
            <li>
              <div className="dot"></div>
              <p>Безрамочный дизайн 94.5%*</p>
            </li>
            <li>
              <div className="dot"></div>
              <p>100% цветовой гаммы DCI-P3</p>
            </li>
            <li>
              <div className="dot"></div>
              <p>Адаптивная частота обновления экрана 10-120 Гц LTPO</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FlipSecTwelve;
