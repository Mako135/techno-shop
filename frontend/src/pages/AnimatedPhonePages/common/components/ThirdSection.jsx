import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const thirdRef = useRef();
  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/cameraSection/background.jpg";
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: thirdRef.current,
        start: "top top",
        end: "+=2000 center",
        scrub: true,
        pin: true,
      }
    });

    tl.from(".third-section-first", { opacity: 0, duration: 2 })
      .to(".third-section-first", { opacity: 1, duration: 2 })
      .to(".third-section-first", { opacity: 0, y: 0, duration: 2 })
      .from(".third-section-second", { opacity: 0, y: 0, duration: 2 })
      .to(".third-section-second", { opacity: 1, duration: 2 });
  }, []);

  return (
    <div className="third-section" ref={thirdRef}>
      <img src={background} alt="" />
      <div className="third-section-content">
        <div className="third-section-first">
          <h1>
            Сохраните яркие <br /> воспоминания в <br /> лучшем качестве
          </h1>
        </div>
        <div className="third-section-second">
          <h1>
            Основная камера 50 Мп с оптической стабилизацией. Сверхчеткая ночная
            съемка
          </h1>
          <p>
            Ночная съемка стала еще ярче и эффектнее. Широкая диафрагма и
            светочувствительный сенсор помогут создать красивые снимки высокого
            качества при любом освещении
          </p>
          <ul>
            <li>
              <span>
                <b>f/1.88</b>
                широкая светопоглощающая диафрагма
              </span>
            </li>
            <li>
              <span>
                <b>OIS</b>
                оптическая стабилизация
              </span>
            </li>
            <li>
              <span>
                <b>1/1.57</b>большой сенсор для ночной съемки
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
