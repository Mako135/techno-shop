import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

const AudioSection = () => {
  const povaRef  = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "center center",
        end: "+=2000 center",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from(".audio-overlay", {
      opacity: 0,
      duration: 1
    });
    tl.from(".audio-title", { opacity: 0, y: 50, duration: 1 })
      .from(".audio-subtitle", { opacity: 0, y: 50, duration: 1 })
      .from(".audio-desc", { opacity: 0, y: 50, duration: 1 })
      .from(".audio img", { opacity: 0, y: 50, duration: 1 });
  }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova6/video-audio.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/chapter3-atmos-icons-beaafc9d.png";
  return (
    <div className="audio">
      <div className="audio-container" ref={povaRef}>
        <video height="100%" muted autoPlay loop width="100%">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="audio-overlay">
          <h1 className="audio-title">
            Первый смартфон TECNO с системой звука <br /> DOLBY ATMOS
          </h1>
          <h3 className="audio-subtitle">
            Улучшенные звуковые <br /> эффекты присутствия
          </h3>
          <p className="audio-desc">
            POVA 6 Pro 5G — это объемный иммерсивный звук, который по новому
            раскроет для вас кино, музыку и любимые игры
          </p>
          <img src={figure} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AudioSection;
