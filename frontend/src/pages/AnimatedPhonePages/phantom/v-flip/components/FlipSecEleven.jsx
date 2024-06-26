import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecEleven = () => {
  const flipRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      }
    });

    tl.from("#flip-11-title", {
      xPercent: 30,
      duration: 2
    })
      .from(
        "#flip-11-subtitle",
        {
          xPercent: -50,
          duration: 2
        },
        0
      )
      .to("#flip-11-title", {
        y: -150,
        opacity: 0.3
      })
      .to(
        "#flip-11-subtitle",
        {
          y: -150,
          opacity: 0.3
        },
        "<"
      );
  }, []);
  return (
    <div className="flip-3" id="flip-11" ref={flipRef}>
      <div className="flip-titles">
        <h1 id="flip-11-title">Безупречная</h1>
        <h2 id="flip-11-subtitle"> производительность</h2>
      </div>
    </div>
  );
};

export default FlipSecEleven;
