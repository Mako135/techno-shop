import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FoldSecSeven = () => {
  const foldRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: foldRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true,
        markers: true,
        ease: "back.out"
      }
    });

    tl.from("#fold-seven-img", {
      scale: 1.2,
      duration: 2
    }).from(".fold-seven-text-desc, .fold-seven-text-title", {
      duration: 2,
      opacity: 0,
      y: 100,
      stagger: 0.3
    });
  }, []);
  const figure_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designErgonomicsSection/02.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/designErgonomicsSection/04.jpg";
  return (
    <div className="fold-seven" ref={foldRef}>
      <div className="title">
        Корпус изготовлен из переработанных материалов <br />С заботой о природе
        и вашем здоровье
      </div>
      <div className="fold-seven-content">
        <div className="fold-seven-left">
          <div className="fold-seven-img">
            <img src={figure_1} alt="fold-seven-img" id="fold-seven-img" />
          </div>
          <div className="fold-seven-text">
            <div className="fold-seven-text-desc">Черный графит</div>
            <div className="fold-seven-text-title">
              переработанные <br /> пластиковые <br /> волокна
            </div>
          </div>
        </div>
        <div className="fold-seven-right">
          <div className="fold-seven-img">
            <img src={figure_2} alt="fold-seven-img" id="fold-seven-img" />
          </div>
          <div className="fold-seven-text">
            <div className="fold-seven-text-desc">Белое золото</div>
            <div className="fold-seven-text-title">
              премиальная <br />
              экокожа
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldSecSeven;
