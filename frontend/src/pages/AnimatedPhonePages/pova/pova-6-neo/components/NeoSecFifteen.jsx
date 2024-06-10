import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const NeoSecFifteen = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".neo-15",
        start: "top top",
        end: "+=2000 center",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from(
      ".neo-15-content,.neo-text .neo-title, .neo-text .neo-subtitle,  .neo-text .neo-desc, .neo-text #volume",
      {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.2
      }
    );
  }, []);

  const large_v =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/videos/video-audio.mp4";
  const small_v =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/videos/video-audio-mb.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/chapter3-atmos-icons.webp";
  return (
    <div className="neo-15">
      <video autoPlay muted loop>
        <source
          src={small_v}
          type="video/mp4"
          media="(max-width: 768px)"
        ></source>
        <source
          src={large_v}
          type="video/mp4"
          media="(min-width: 769px)"
        ></source>
        Your browser does not support the video tag.
      </video>
      <div className="neo-15-content">
        <div className="neo-text">
          <div className="neo-title">
            Первая серия смартфонов TECNO с системой звука DOLBY ATMOS
          </div>
          <div className="neo-subtitle">
            Улучшенные звуковые эффекты присутствия
          </div>
          <div className="neo-desc">
            POVA 6 Neo ─ это объемный иммерсивный звук, который по-новому
            раскроет для вас кино, музыку и любимые игры
          </div>
          <picture>
            <source media="(min-width: 768px)" srcSet={figure} />
            <img src={figure} alt="" id="volume" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default NeoSecFifteen;
