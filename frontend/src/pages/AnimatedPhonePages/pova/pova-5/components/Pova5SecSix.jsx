import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pova5SecSix = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top top",
        end: "+=6000 center",
        scrub: 1,
        pin: true,
        markers: true // Optional, for debugging
      }
    });

    tl.from("#slide_1", { opacity: 1, duration: 2 })
      .to("#slide_1", { opacity: 1, y: 0, duration: 2 })
      .from("#slide_2", { opacity: 0, duration: 2 })
      .to("#slide_2", { opacity: 1, y: 0, duration: 2 })
      .from("#slide_3", { opacity: 0, duration: 2 })
      .to("#slide_3", { opacity: 1, y: 0, duration: 2 });
  }, []);

  return (
    <div className="fade-slider" ref={povaRef}>
      <div className="slide" id="slide_1">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/colors-grey-0d9f763b.jpg"
          alt=""
        />
      </div>
      <div className="slide" id="slide_2">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/colors-blue-ec5a6ac0.jpg"
          alt=""
        />
      </div>
      <div className="slide" id="slide_3">
        <img
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/colors-golden-a3a8b31a.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Pova5SecSix;
