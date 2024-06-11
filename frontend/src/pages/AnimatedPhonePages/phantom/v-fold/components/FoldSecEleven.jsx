import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FoldSecEleven = () => {
  const foldRef = useRef();
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: foldRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: true,
        ease: "back.out"
      }
    });

    tl.from("#eleven-img", {
      scale: 5,
      xPercent: -80,
      yPercent: 80
    }).fromTo(
      ".fold-left-2 .title, .fold-left-2 .subtitle, .fold-left-2 .desc, .fold-right-2 .title, .fold-right-2 .subtitle, .fold-right-2 .desc",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3
      }
    );
  }, []);

  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/performanceMemorySection/memory.jpg";
  return (
    <div className="fold-eleven" ref={foldRef}>
      <div className="fold-circle"></div>
      <div className="fold-eleven-content">
        <div className="fold-left-2">
          <div className="title">12 Гб</div>
          <div className="subtitle">LPDDR5X</div>
          <div className="desc">Невероятная скорость передачи данных.</div>
        </div>
        <img src={figure} alt="" id="eleven-img"/>
        <div className="fold-right-2">
          <div className="title">512 Гб</div>
          <div className="subtitle">UFS3.1</div>
          <div className="desc">Повышенная скорость чтения файлов</div>
        </div>
      </div>
    </div>
  );
};

export default FoldSecEleven;
