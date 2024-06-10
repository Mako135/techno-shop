import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecFour = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/perfectDesign/perfectDesignRU.mp4";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flip-4",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
        markers: true
      }
    });

    tl.from("#flip-video-1", {
      scale: 2
    }).from(".flip-text h1, .flip-text .vl, .flip-text p", {
        y: 50,
        opacity: 0,
        stagger: 0.2
    });
  }, []);

  return (
    <div className="flip-4">
      <div className="flip-4-content">
        <video autoPlay loop muted id="flip-video-1">
          <source src={video} type="video/mp4" />
        </video>
        <div className="flip-text">
          <h1>
            Компактный. Изящный <br /> в каждой детали
          </h1>
          <div className="vl"></div>
          <p>
            Легко помещается в кармане <br />в сложенном виде. Элегантный
            <br />
            дизайн и никаких компромиссов
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipSecFour;
