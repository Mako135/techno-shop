import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlipSecThirteen = () => {
  const flipRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flipRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
      }
    });

    tl.from(".flip-13-video", {
      scale: 2,
      opacity: 0.3,
      xPercent: -50
    })
      .from(".text-1", {
        opacity: 0,
        y: 50
      })
      .to(".flip-13-video,.text-1", {
        opacity: 0,
        y: -50
      })
      .fromTo(
        ".flip-13-video-1, .text-2",
        {
          opacity: 0,
          y: 50,
          stagger: 0.2
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.2
        }
      );
  }, []);
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/behaviorSection/soc2.mp4";
  const video_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/phantom-v-flip-5g/videos/chargeSection/charge3.mp4";
  return (
    <div className="flip-13" ref={flipRef}>
      <div className="flip-text text-1">
        <h1 style={{ marginBottom: "4rem" }}>
          Новое пространство <br /> для творчества, <br />
          молниеносная работа
        </h1>
        <h1>8 Гб ОЗУ + 256 Гб ПЗУ</h1>
      </div>
      <video src={video} className="flip-13-video" muted autoPlay loop></video>
      <video
        src={video_2}
        className="flip-13-video-1"
        muted
        autoPlay
        loop
      ></video>
      <div className="flip-text text-2">
        <h1>
          Стремительная <br />
          зарядка, долгая
          <br /> работа
        </h1>
        <h3>
          45 Вт быстрая зарядка <br />
          4000 мАч энергоемкий аккумулятор
        </h3>
        <ul>
          <li>
            <div className="dot"></div>
            <p>до 50% за 15 минут</p>
          </li>
          <li>
            <div className="dot"></div>
            <p>до 100% за 45 минут</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlipSecThirteen;
