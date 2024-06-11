import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FifteenthSection = () => {
  const  fifteenRef  = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fifteenRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.fromTo(
      ".fifteen-section-title",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 2
      }
    )
      .to(".fifteen-section-title", {
        opacity: 0,
        y: -50,
        duration: 2
      })
      .fromTo(
        ".fifteen-section-second ",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: -50,
          duration: 2,
          stagger: 0.2
        },
        ">"
      );
  }, []);

  return (
    <div className="fifteen-section" ref={fifteenRef}>
      <div className="fifteen-titles">
        <h1 className="fifteen-section-title">
          Заряжается быстро. <br />
          Работает долго
        </h1>
        <div className="fifteen-section-second">
          <h1>70 Вт ультра-зарядка 5000 мАч аккумулятор</h1>В CAMON 30
          установлен энергоемкий аккумулятор 5000 мАч, а в комплекте идет
          быстрая зарядка, которая в считанные минуты восстановит запас энергии
          батареи, чтобы вы часами напролет могли наслаждаться любимыми
          фильмами, играми, общением и съемкой контента.
          <div className="dots-section-conatiner">
            <div className="card-content-dots" id="eleven-dots">
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>1600+ циклов</b>
                  без потери энергоэффективности
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>70 Вт</b>
                  мощность зарядки
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>-10℃</b>зарядка при низкой температуре
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>~ 45 минут</b>От 0 до 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video
        src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/videos/charge_cl6.mp4"
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default FifteenthSection;
