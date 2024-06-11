import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FoldSecNine = () => {
  const foldRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: foldRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        markers: true,
        ease: "back.out"
      }
    });

    tl.to("#fold-slide-2", {
      yPercent: -101
    }),
      tl.to("#fold-slide-3", {
        yPercent: -201
      });
  }, []);

  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraNightLenSection/01.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraNightLenSection/02.jpg";
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/cameraNight4K.mp4";
  return (
    <div className="fold-nine" ref={foldRef}>
      <div className="fold-nine-text">
        <div>
          <div className="title">
            Камера 50 Мп <br />
            Потрясающая ночная съемка. Создавайте восхитительные <br />
            фотографии даже в темное время суток
          </div>
          <div className="desc">
            Основная камера 50 Мп с улучшенным светочувствительным сенсором.
            Потрясающее <br />
            качество до мельчайших деталей
          </div>
        </div>
        <div className="fold-tip">Ночной режим для портретных снимков</div>
      </div>
      <div className="fold-nine-content">
        <img src={figure_1} alt="" />
        <img src={figure_2} alt="" id="fold-slide-2" />
        <video src={video} id="fold-slide-3"></video>
      </div>
    </div>
  );
};

export default FoldSecNine;
