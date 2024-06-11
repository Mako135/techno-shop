import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "../pova.css";
import { useLayoutEffect, useRef } from "react";

const SliderFade = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top top",
        end: "+=6000 center",
        scrub: true,
        pin: true,
        markers: true // Optional, for debugging
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

  return (
    <div className="fade-slider" ref={povaRef}>
      <div className="slide" id="slide_1">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/photo-1-cd3f534e.jpg"
          alt=""
        />
      </div>
      <div className="slide" id="slide_2">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/photo-2-889a6350.jpg"
          alt=""
        />
      </div>
      <div className="slide" id="slide_3">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/photo-3-cbf780a9.jpg"
          alt=""
        />
      </div>
      <div className="slide" id="slide_4">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/photo-4-7928fdeb.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SliderFade;
