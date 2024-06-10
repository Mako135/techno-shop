import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecEleven = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#flip-11",
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: true
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
    <div className="flip-3" id="flip-11">
      <div className="flip-titles">
        <h1 id="flip-11-title">Безупречная</h1>
        <h2 id="flip-11-subtitle"> производительность</h2>
      </div>
    </div>
  );
};

export default FlipSecEleven;
