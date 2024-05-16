import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Slide_1 from "./sliders/Slide_1";
import Slide_2 from "./sliders/Slide_2";
import Slide_3 from "./sliders/Slide_3";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-section",
        start: "top top",
        end: "+=800% center",
        scrub: true,
        pin: true,
        markers: true // Optional, for debugging
      }
    });

    tl.to(".slide-1", { xPercent: -100, opacity: 0.5, duration: 2 })
      .add(
        gsap.to(".progress-bar", { xPercent: 50, duration: 2 }),
        "-=2" // Запуск анимации прогресс-бара одновременно с анимацией слайда
      )
      .fromTo(
        ".slide-2",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .add(
        gsap.to(".progress-bar", { xPercent: 100, duration: 1 }),
        "-=1" // Запуск анимации прогресс-бара одновременно с анимацией слайда
      )
      .to(".slide-2", { xPercent: -100, opacity: 0.5, duration: 2 })
      .add(
        gsap.to(".progress-bar", { xPercent: 150, duration: 2 }),
        "-=2" // Запуск анимации прогресс-бара одновременно с анимацией слайда
      )
      .fromTo(
        ".slide-3",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 }
      )
      .add(
        gsap.to(".progress-bar", { xPercent: 200, duration: 1 }),
        "-=1" // Запуск анимации прогресс-бара одновременно с анимацией слайда
      );
  }, []);

  return (
    <div className="fourth-section">
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
