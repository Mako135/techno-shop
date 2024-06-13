import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecThree = () => {
  const flipRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.from("#flip-3-title", {
      xPercent: 30,
      duration: 2
    })
      .from(
        "#flip-3-subtitle",
        {
          xPercent: -50,
          duration: 2
        },
        0
      )
      .to("#flip-3-title", {
        y: -150,
        opacity: 0.3
      })
      .to(
        "#flip-3-subtitle",
        {
          y: -150,
          opacity: 0.3
        },
        "<"
      );
  }, []);
  return (
    <div className="flip-3" ref={flipRef}>
      <div className="flip-titles">
        <h1 id="flip-3-title">Утонченный</h1>
        <h2 id="flip-3-subtitle"> дизайн</h2>
      </div>
    </div>
  );
};

export default FlipSecThree;
