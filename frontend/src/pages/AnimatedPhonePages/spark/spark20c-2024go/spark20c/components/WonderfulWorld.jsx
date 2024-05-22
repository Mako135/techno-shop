import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WonderfulWorld = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-boxes",
        start: "center center",
        end: "+=2000",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    tl.add([
      gsap.from(".left-text", {
        opacity: 0,
        xPercent: -100,
        duration: 2
      }),
      gsap.from(".right-text", {
        opacity: 0,
        xPercent: 100,
        duration: 2
      })
    ]);
  }, []);

  return (
    <div className="sec-three-2">
      <div className="icon_container">
        <div className="title">
          Удивительное <br /> путешествие <br />в мир <br />
          контента
        </div>
        <div className="icon icon3"></div>
      </div>

      <div className="text-boxes">
        <div className="left-text">
          <div className="text_wrapper">
            <h2>
              Экран 6.6 с частотой <br /> обновления 90 Гц
            </h2>
            <p>
              Исследуйте яркий мир контента на большом экране 6.6”. Благодаря
              редкому в своем классе соотношению экрана к корпусу 90.5%, вы
              почувствуете неповторимое визуальное наслаждение. А частота
              обновления 90 Гц сделает изображение на экране более плавным и
              приятным. Ваш любимый контент — в новом формате
            </p>
          </div>
        </div>
        <div className="right-text">
          <div className="right-data">
            <div className="param">
              <div className="title">6.6</div>
              <div className="desx">Широкий экран</div>
            </div>
            <div className="param">
              <div className="title">90 Гц</div>
              <div className="desx">Частота обновления</div>
            </div>
            <div className="param">
              <div className="title">8H</div>
              <div className="desx">Твердость стекла</div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="icon_container">
          <div className="title">Красота и польза — идеальное сочетание</div>
          <div className="icon icon4"></div>
        </div>
      </footer>
    </div>
  );
};

export default WonderfulWorld;
