import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

const Certificate = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "center center",
        end: "+=2000 center",
        scrub: true,
        pin: true,
      }
    });

    tl.from(".overlay", {
      opacity: 0,
      duration: 1
    });
    tl.from(".certificate .pova-title", { opacity: 0, y: 50, duration: 1 })
      .from(".certificate .pova-subtitle", { opacity: 0, y: 50, duration: 1 })
      .from(".overlay img", { opacity: 0, y: 50, duration: 1 });
  }, []);

  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-light-671cd6b3.jpg";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-light-tuv-5ab1e66c.png";
  return (
    <div className="certificate">
      <div className="certificate-container" ref={povaRef}>
        <img src={background} alt="" />
        <div className="overlay">
          <h1 className="pova-title">
            2160 Гц <br /> частота ШИМ
          </h1>
          <p className="pova-subtitle">
            Сертификация TÜV Rheinland: <br /> низкий уровень вредного синего
            света
          </p>
          <img src={figure} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
