import Figure from "../assets/Figure.png";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-container",
          start: "+=200 center",
          end: "+=300",
          markers: true,
          onEnter: () => {
            console.log(1); // Вывод числа 1 в консоль при срабатывании анимации
          }
        }
      });

      tl.from(".content", {
        scale: 0.3,
        opacity: 0,
      }).to(".content", {
        y: 0,
        scale: 1,
        opacity: 1,
      });
      tl.from("#figure", {
        scale: 0.3,
        opacity: 0,
      })
      tl.to("#figure", {
        scale: 1,
        opacity: 1,
      })
    }, []);


  return (
    <div className="image-container">
      <img src={Figure} alt="Изображение 2" id="figure" />

      <div className="content">
        <div>
          <h1 id="title">Технологичный <br /> дизайн</h1>
          <h2 id="subtitle">Знания,<br /> технологии, будущее</h2>
        </div>
        <p id="desc">
          Футуристичный дизайн POVA 6 Pro 5G был вдохновлен высокими
          технологиями, искусственным интеллектом и эстетикой научной
          фантастики. Добро пожаловать в мир, где искусство и техника слились
          воедино!
        </p>
      </div>
    </div>
  );
};

export default Design;
