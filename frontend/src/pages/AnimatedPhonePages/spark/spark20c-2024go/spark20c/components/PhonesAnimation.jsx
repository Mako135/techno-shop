import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PhonesAnimation = () => {
  const sparkRef = useRef();
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sparkRef.current,
        start: "top+=100 top",
        end: "+=2000",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    tl.to(".img1, .paramsa", {
      opacity: 0,
      duration: 2
    }).fromTo(
      ".paramsb, .img2",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 2
      }
    );
  }, []);

  return (
    <div className="sec-three-box" ref={sparkRef}>
      <div className="box">
        <div className="circle">
          <div className="sec-img img1"></div>
          <div className="sec-img img2"></div>
        </div>
        <div className="box-1">
          <div className="text_wrapper">
            <div className="title-3">Яркий дизайн и ничего лишнего</div>
            <div className="desc-3">
              Встречайте обновленный дизайн с узнаваемым трехкольцевым блоком
              камер. Корпус выполнен в двух вариантах: яркая переливающаяся
              разными цветами текстура, и экокожа Magic Skin 2.0 из безвредного
              экологичного материала. Выберите свой стиль!
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="params paramsa">
            <div className="param">
              <div className="title">8.55 мм</div>
              <div className="desc">Тонкий корпус</div>
            </div>
            <div className="param">
              <div className="title">Sparkle Sand</div>
              <div className="desc">Технология покрытия</div>
            </div>
            <div className="param">
              <div className="title">Разнообразие цветов</div>
              <div className="desc">Переливающийся эффект</div>
            </div>
          </div>
          <div className="params paramsb">
            <div className="param">
              <div className="title">8.55 мм</div>
              <div className="desc">Тонкий корпус</div>
            </div>
            <div className="param">
              <div className="title">
                Magic <br /> Skin 2.0
              </div>
              <div className="desc">Текстурная экокожа</div>
            </div>
            <div className="param">
              <div className="title">
                На 100% <br /> экологичный <br /> материал
              </div>
              <div className="desc">
                задней панели <br /> корпуса
              </div>
            </div>
            <div className="param">
              <div className="title">
                Без <br /> вреда
              </div>
              <div className="desc">
                для окружающей <br /> среды
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesAnimation;
