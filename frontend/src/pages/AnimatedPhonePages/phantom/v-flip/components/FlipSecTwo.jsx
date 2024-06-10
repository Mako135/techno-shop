import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecTwo = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flip-2",
        start: "center center",
        end: "+=3000",
        pin: true,
        scrub: 1,
        markers: true
      }
    });

    tl.from(".flip-card-1", {
      y: -50,
      opacity: 0,
      duration: 2
    })
      .from(".flip-card-2", {
        x: -100,
        opacity: 0,
        duration: 2
      })
      .from(".flip-card-3", {
        y: 50,
        opacity: 0,
        duration: 2
      })
      .from(".flip-card-4", {
        y: 50,
        x: 50,
        opacity: 0,
        duration: 2
      });
  }, []);

  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/officialVideoToOutlineSection/performance.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/officialVideoToOutlineSection/design.jpg";
  const figure_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/officialVideoToOutlineSection/experience.jpg";
  const figure_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/officialVideoToOutlineSection/camera.jpg";
  return (
    <div className="flip-2">
      <div className="flip-card-1">
        <img src={figure_1} alt="" />
        <p>Производительность</p>
      </div>
      <div className="flip-card-2">
        <img src={figure_2} alt="" />
        <p>Дизайн</p>
      </div>
      <div className="flip-card-3">
        <img src={figure_3} alt="" />
        <p>Интерактивность</p>
      </div>
      <div className="flip-card-4">
        <img src={figure_4} alt="" />
        <p>Камера</p>
      </div>
    </div>
  );
};

export default FlipSecTwo;
