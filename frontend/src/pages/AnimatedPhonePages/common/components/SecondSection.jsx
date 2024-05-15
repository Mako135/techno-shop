import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".common-second-section",
        start: "-=200 center",
        end: "center center",
        scrub: true,
        markers: true // Optional, for debugging
      }
    });

    tl.from(".slide-figure", { duration: 2, xPercent: 100 })
      .from(".second-titles", {
        y: -500,
        x: 300,
        opacity: 0.5,
        duration: 10
      })
      .from(".second-inner-figure", { y: 300, duration: 10 });
  }, []);

  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/titleSection/bar.png";
  const phone =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/titleSection/trendy_image_cl6.png";
  return (
    <div className="common-second-section">
      <img src={figure} alt="" className="slide-figure" />
      <div className="second-inner">
        <div className="second-titles">
          <h1>Новая эра </h1>
          <h1>мобильной</h1>
          <h1>съемки</h1>
        </div>
        <div className="second-inner-figure">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
