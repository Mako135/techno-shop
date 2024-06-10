import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecFive = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flip-5",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        markers: true
      }
    });

    tl.from(".flip-5-content", {
      scale: 1.1,
      opacity: 0,
      duration: 2
    })
      .fromTo(
        ".flip-5-content video, #flip-text-1",
        {
          opacity: 0,
          y: 50
        },
        {
          y: 0,
          opacity: 1,
          duration: 2
        },
        "<"
      )
      .to(".flip-5-content video, #flip-text-1", {
        opacity: 0,
          duration: 2,
          y: -50,
        
      })
      .fromTo(
        ".flip-5-content img, #flip-text-2",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 2
        }
      );
  }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/camera/camera.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/images/camera/camera.png";
  return (
    <div className="flip-5">
      <div className="flip-5-content">
        <div className="flip-text">
          <h1 className="flip-text-title">
            Просто космос. <br /> Удобный дисплей <br />с модулем камер
          </h1>
          <p id="flip-text-1">
            Космический дизайн
            <br />
            внешнего дисплея с <br />
            модулем камер напоминает <br />
            планету со спутниками
          </p>
          <p id="flip-text-2">
            Продуманная эргономика.
            <br />
            Целая вселенная в твоих руках
          </p>
        </div>
        <video src={video}></video>
        <img src={figure} alt="" />
      </div>
    </div>
  );
};

export default FlipSecFive;
