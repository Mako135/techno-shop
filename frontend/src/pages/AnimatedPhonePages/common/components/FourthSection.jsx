import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Slide_1 from "./sliders/Slide_1";
import Slide_2 from "./sliders/Slide_2";
import Slide_3 from "./sliders/Slide_3";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  const fourthRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fourthRef.current,
        start: "top top",
        end: "+=300% center",
        scrub: true,
        pin: true,
      }
    });

    tl.to(".slide-1", { xPercent: -100, opacity: 0.5, duration: 2 })

      .fromTo(
        ".slide-2",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .to(".progress-bar", { xPercent: 100, duration: 1 }, "<") // синхронизация с началом предыдущей анимации
      .to(".slide-2", { xPercent: -100, opacity: 0.5, duration: 2 })

      .fromTo(
        ".slide-3",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .to(".progress-bar", { xPercent: 200, duration: 1 }, "<"); // синхронизация с началом предыдущей анимации
  }, []);

  return (
    <div className="fourth-section" ref={fourthRef}>
      <div className="fourth-section-inner">
        <div className="fourth-slider">
          <div className="slider-absolute slide-1">
            <Slide_1 />
          </div>
          <div className="slider-absolute slide-2">
            <Slide_2 />
          </div>
          <div className="slider-absolute slide-3">
            <Slide_3 />
          </div>
        </div>
        <div className="fourth-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
