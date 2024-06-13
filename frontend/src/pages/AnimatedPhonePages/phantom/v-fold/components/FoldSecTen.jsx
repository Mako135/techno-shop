import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FoldSecTen = () => {
  const foldRef = useRef();

    useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: foldRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          ease: "back.out"
        }
      });

      tl.from("#fold-ten-video", {
        scale: 1
      }).fromTo(
        ".fold-ten-text-inner .title, .fold-ten-text-inner .subtitle, .fold-ten-text-inner .desc, .text_list h3, .text_list p",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3 // задержка между анимациями элементов
        }
      );
    }, []);

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/videos/chip.mp4";
  return (
    <div className="fold-ten">
      <header>
        <div className="title">
          Флагманский 4-нанометровый процессор <br /> Dimensity 9000+
          <br />
          Лучшая производительность
        </div>
        <div className="desc">
          PHANTOM V Fold оснащен флагманским 4-нанометровым процессором MediaTek
          Dimensity 9000+.
          <br /> Высокая производительность. Низкое энергопотребление.
          Продвинутый термоконтроль. <br />
          Большой экран для масимальной многозадачности.
        </div>
      </header>
      <div className="fold-ten-content" ref={foldRef}>
        <div className="fold-ten-video">
          <video autoPlay loop muted id="fold-ten-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="fold-ten-text">
          <div className="fold-ten-text-inner">
            <div className="title">
              Три составляющие флагманской производительности
            </div>
            <div className="subtitle">
              Флагманский 4-нанометровый <br />
              процессор Dimensity <span>9000+ 5G</span>
            </div>
            <div className="desc">
              Грамотно адаптирован для складного смартфона. Наслаждайтесь <br />
              высокой скоростью работы даже в условиях многозадачности
            </div>
          </div>
          <div className="text_list">
            <h3>4 нанометра</h3>
            <h3>+5 %</h3>
            <h3>+10 %</h3>
            <h3>1,080,000+</h3>
            <p>флагманский техпроцесс</p>
            <p>производительность центрального процессора</p>
            <p>производительность графического процессора</p>
            <p>баллов AnTuTu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldSecTen;
