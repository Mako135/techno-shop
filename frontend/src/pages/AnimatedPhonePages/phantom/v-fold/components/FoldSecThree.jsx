import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FoldSecThree = () => {
    const wrapperRef = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fold-three",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    tl.from("#fold-phone-1", {
      scale: 10,
      xPercent: 50
    })
      .fromTo(
        "#fold-phone-2",
        {
          opacity: 0,
          x: 150
        },
        {
          opacity: 1,
          x: 0,
          duration: 2
        }
      )
      .from(wrapperRef.current.children, {
        y: 100,
        opacity: 0, // Добавляем начальное состояние прозрачности
        stagger: 0.4,
        duration: 1 // Добавляем длительность для анимации
      });
  }, []);

  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/screenTotalSection/phoneOpen.png";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/screenTotalSection/phoneClose.png";

  return (
    <div className="fold-three">
      <header>
        <img src={figure_1} alt="" id="fold-phone-1" />
        <img src={figure_2} alt="" id="fold-phone-2" />
      </header>
      <div className="text_wrapper" ref={wrapperRef}>
        <div className="title">
          Флагманский двойной экран оптимального <br /> размера с частотой
          обновления 120 Гц
        </div>
        <div className="title">
          Впечатляющие возможности <br /> внутреннего и внешнего дисплея
        </div>
        <div className="desc">
          Размеры складного экрана были оптимизированы исходя из мирового опыта
          использования <br />
          подобных смартфонов. Это абсолютно новое, захватывающее визуальное
          приключение,
          <br />
          воплощенное в основном и дополнительном экране.
        </div>
      </div>
    </div>
  );
};

export default FoldSecThree;
