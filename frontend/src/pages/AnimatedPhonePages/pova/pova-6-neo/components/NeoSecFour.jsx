import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const NeoSecFour = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fade-slider",
        start: "top top",
        end: "+=6000 center",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from("#slide_1", { opacity: 1, duration: 2 })
      .to("#slide_1", { opacity: 1, y: 0, duration: 2 })
      .from("#slide_2", { opacity: 0, duration: 2 })
      .to("#slide_2", { opacity: 1, y: 0, duration: 2 })
      .from("#slide_3", { opacity: 0, duration: 2 })
      .to("#slide_3", { opacity: 1, y: 0, duration: 2 })
      .from("#slide_4", { opacity: 0, duration: 2 })
      .to("#slide_4", { opacity: 1, duration: 2 });
  }, []);
    
    const small_1 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/m-photo-1.webp";
    const small_2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/m-photo-2.webp";
    const small_3 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/m-photo-3.webp";
    const small_4 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/mb/m-photo-4.webp";

    const large_1 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/photo/photo-1.webp";
    const large_2 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/photo/photo-2.webp";
    const large_3 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/photo/photo-3.webp";
    const large_4 =
      "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-neo/ru/assets/images/photo/photo-4.webp";
  return (
    <div className="fade-slider">
      <div className="slide" id="slide_1">
        <picture>
          <source srcSet={large_1} media="(min-width: 768px)" />
          <img src={small_1} alt="Banner" />
        </picture>
      </div>
      <div className="slide" id="slide_2">
        <picture>
          <source srcSet={large_2} media="(min-width: 768px)" />
          <img src={small_2} alt="Banner" />
        </picture>
      </div>
      <div className="slide" id="slide_3">
        <picture>
          <source srcSet={large_3} media="(min-width: 768px)" />
          <img src={small_3} alt="Banner" />
        </picture>
      </div>
      <div className="slide" id="slide_4">
        <picture>
          <source srcSet={large_4} media="(min-width: 768px)" />
          <img src={small_4} alt="Banner" />
        </picture>
      </div>
    </div>
  );
};

export default NeoSecFour;
