import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const EleventhSection = () => {
  useLayoutEffect(() => {
    const yValue = () => (window.innerWidth > 768 ? -500 : -1200);
    const yValuePhone = () => {
      if (window.innerWidth > 1400) {
        return -200;
      } else if (window.innerWidth > 1220) {
        return -150;
      } else if (window.innerWidth > 768) {
        return -125;
      } else {
        return -100;
      }
    };
    const yValue2 = yValue() + 100;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".eleven-section",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from("#first-title", {
      duration: 2,
      yPercent: yValue2,
      opacity: 0.3
    })
      .from(
        "#second-title",
        { duration: 2, yPercent: yValue, xPercent: 60, opacity: 0.3 },
        "<"
      )
      .to(".first-titles", {
        duration: 2,
        opacity: 0,
        y: -100
      })
      .from(".second-title", {
        duration: 2,
        opacity: 0,
        y: 100
      })
      .from(
        "#eleven-processor",
        {
          duration: 2,
          opacity: 0
        },
        "<"
      )
      .to(".second-title", {
        duration: 2,
        opacity: 0,
        y: -100
      })
      .to(
        "#eleven-processor",
        {
          duration: 2,
          opacity: 0
        },
        "<"
      )
      .to("#eleven-phone", {
        duration: 2,
        xPercent: yValuePhone
      })
      .fromTo(
        ".eleven-section-second h1, .eleven-section-second p, #eleven-dots",
        {
          opacity: 0,
          y: 0
        },
        {
          opacity: 1,
          y: 50,
          duration: 2,
          stagger: 0.2
        }
      );
  }, []);

  return (
    <div className="eleven-section">
      <img
        src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/titleSection/bar_play.png"
        alt=""
        className="slide-figure"
      />
      <div className="eleven-section-content">
        <div className="eleven-section-first">
          <div className="eleven-section-titles">
            <div className="first-titles">
              <h1 id="first-title">Новые</h1>
              <h1 id="second-title">возможности</h1>
            </div>
            <div className="second-title">
              <h1>Прибавим мощности!</h1>
            </div>
          </div>

          <div className="eleven-images">
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/titleSection/trendy_play.png"
              alt=""
              id="eleven-phone"
            />
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/titleSection/soc_cl6.png"
              alt=""
              id="eleven-processor"
            />
          </div>
          <div className="eleven-section-second">
            <h1>Процессор MediaTek G99 Ultimate</h1>
            <p>
              Мощный процессор и большой объем оперативной памяти делают работу
              со смартфоном максимально эффективной и комфортной. Наслаждайтесь
              скоростью и потрясающими возможностями устройства, а внушительный
              объем памяти сохранит все ваши данные
            </p>
            <div className="card-content-dots" id="eleven-dots">
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>Индикатор</b>
                  записи видео
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>Индикатор</b>
                  голосового помощника
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>Индикатор</b>
                  ИК-пульта
                </span>
              </div>
              <div className="eleven-dot-container">
                <div className="dot"></div>
                <span>
                  <b>Индикатор</b>
                  зарядки
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EleventhSection;
