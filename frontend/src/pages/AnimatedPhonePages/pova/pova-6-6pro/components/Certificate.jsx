import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useEffect } from "react";

const Certificate = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certificate-container",
        start: "center center",
        end: "+=2000 center",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from(".overlay", {
      opacity: 0,
      duration: 1,
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
      <div className="certificate-container">
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
