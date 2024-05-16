import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FifthSection = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-section",
        start: "top top",
        end: "+=800% center",
        scrub: true,
        pin: true,
        markers: true // Optional, for debugging
      }
    });

    tl      .to(
        ".fifth-section-first-content h1, .fifth-section-first-content p, .fifth-section-first-content .dot-container, .fifth-section-first-content video ",
        {
          y: -150,
          opacity: 0,
          duration: 1,
          stagger: 0.3
        }
      )
      .from(
        ".fifth-section-second-content h1, .fifth-section-second-content p, .fifth-section-second-content .dot-container, .fifth-section-second-content img",
        {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: 0.3
        }
      );
  }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/videos/focus.mp4";
  const image =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/focus-section/picture.jpg";
  return (
    <div className="fifth-section">
      <div className="fifth-section-first-content">
        <section>
          <h1>
            50 Мп фронтальная камера <br /> с автофокусом по глазам
          </h1>
          <p>
            Посмотрите на селфи по-новому. CAMON 30 оснащен сверхчеткой
            фронтальной камерой 50 Мп для создания ярких и эффектных
            селфи-снимков. Красивые кадры получаются благодаря технологии
            фокусировки на глазах. Это помогает передать едва уловимые элементы
            мимики, которые делают каждый снимок неповторимым. Станьте центром
            внимания!
          </p>
          <div className="dot-section">
            <div className="dot-container">
              <div className="dot"></div>
              <span>
                <b>Автофокус</b>
                по глазам человека
              </span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>
                <b>100 мс</b>
                максимальная скорость фокусировки
              </span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>
                <b>50 Мп</b>камера высокой четкости
              </span>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <span>
                <b>Диодная вспышка</b>с выбором тона подсветки
              </span>
            </div>
          </div>
        </section>
        <video src={video} muted autoPlay></video>
      </div>
      <div className="fifth-section-second-content">
        <section>
          <h1>
            50 Мп фронтальная камера <br /> с автофокусом по глазам
          </h1>
          <p>
            Посмотрите на селфи по-новому. CAMON 30 оснащен сверхчеткой
            фронтальной камерой 50 Мп для создания ярких и эффектных
            селфи-снимков. Красивые кадры получаются благодаря технологии
            фокусировки на глазах. Это помогает передать едва уловимые элементы
            мимики, которые делают каждый снимок неповторимым. Станьте центром
            внимания!
          </p>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Автофокус</b>
              по глазам человека
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>100 мс</b>
              максимальная скорость фокусировки
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>50 Мп</b>камера высокой четкости
            </span>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
            <span>
              <b>Диодная вспышка</b>с выбором тона подсветки
            </span>
          </div>
        </section>
        <div className="second-content-image-container">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
