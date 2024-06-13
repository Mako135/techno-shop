import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

const SecondBatterySection = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top top",
        end: "+=2000 center",
        scrub: true,
        pin: true,
      }
    });

    tl.from(".first", { opacity: 1, duration: 2 })
      .to(".first", { opacity: 0, y: 0, duration: 2 })
      .from(".second", { opacity: 0, y: 0, duration: 2 })
      .to(".second", { opacity: 1, duration: 2 });
  }, []);

  const backVideo =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/pova6-5g/v-electric.mp4";
  return (
    <div className="second-battery-container" ref={povaRef}>
      <video autoPlay muted loop className="background-video">
        <source src={backVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-inner-2">
        <div className="first">
          <h1>6000 мАч</h1>
          <h3>Энергии хватит надолго</h3>
          <p>
            Непревзойденная выносливость POVA 6 позволяет интенсивно
            пользоваться смартфоном в течение всего дня
          </p>
          <ul>
            <li>
              <span>Звонки</span>
              <strong>
                31 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Игры</span>
              <strong>
                11 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Соцсети</span>
              <strong>
                15 <sup>+ часов</sup>
              </strong>
            </li>
            <li>
              <span>Видео </span>
              <strong>
                14 <sup>+ часов</sup>
              </strong>
            </li>
          </ul>
        </div>
        <div className="second">
          <h1>70 Вт ультра-зарядка</h1>
          <h2>Заряжает на 100% за 50 минут</h2>
          <p>
            Всего за 20 минут смартфон заряжается наполовину, а за 50 минут — до
            100%*
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondBatterySection;
