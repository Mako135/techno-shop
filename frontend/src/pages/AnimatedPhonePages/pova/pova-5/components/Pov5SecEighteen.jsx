import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pov5SecEighteen = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
        markers: true
      }
    });

    tl.to(".sec-18", { xPercent: -25, ease: "none" });
  }, []);
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-hdr.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/section-hdr-pc-f2feabdd.jpg";
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/hdr-a84624a4.png";
  return (
    <div className="sec-18" ref={povaRef}>
      <div className="sec-18-card">
        <header>
          <video src={video}></video>
          <img src={frame} alt="" className="frame-img" />
        </header>
        <p>
          Создавай потрясающие по красоте и четкости снимки с функцией
          портретной бьютификации.
        </p>
      </div>
      <div className="sec-18-card">
        <header>
          <img src={figure} alt="" />
          <img src={frame} alt="" className="frame-img" />
        </header>
        <p>Еще больше фактуры твоим фото придаст режим HDR</p>
      </div>
    </div>
  );
};

export default Pov5SecEighteen;
