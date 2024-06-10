import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pova5SecEight = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pova-8",
        start: "top top",
        end: "+=4000 center",
        scrub: 1,
        pin: true,
        markers: true // Optional, for debugging
      }
    });

    tl.to(".block_1", { opacity: 0, y: 0, duration: 2 })
      .to(
        ".block_2",
        {
          opacity: 1
        }
      )
      .to(".block_2", { opacity: 0, y: 0, duration: 2 })
      .fromTo(
        ".block_3",
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 2
        }
      );
  }, []);
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/videos/20230727-charge2-aurora-engine.mp4";
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/battery-2-4817e336.jpg";
  const figure_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/battery-3-b035a7b1.jpg";
  return (
    <div className="pova-8">
      <picture className="pova-8-bg">
        <source
          media="(min-width: 768px)"
          srcSet="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/battery-a80d3eb6.png"
        ></source>
        <img
          className="bg-plan"
          src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/battery-m-3c37d765.png"
        />
      </picture>

      <div className="pova-8-content">
        <div className="pova-8-content-inner">
          {/* BLOCK 1*/}
          <div className="pova-8-block block_1">
            <video src={video} muted autoPlay loop></video>
            <div className="pova-8-text">
              <h1>
                УМНАЯ ЗАРЯДКА <br /> 45 ВТ
              </h1>
              <p>
                Технология STS предотвращает короткие замыкания, которые могут
                возникать из-за контакта алюминиевой фольги с анодом. Таким
                образом исключается риск выхода из строя аккумулятора.
              </p>
              <div className="pova-datas">
                <div className="pova-data">
                  <p>50%</p>
                  <span>За 21 минуту</span>
                </div>
                <div className="pova-data">
                  <p>10 Вт</p>
                  <span>Обратная зарядка</span>
                </div>
              </div>
            </div>
          </div>
          {/* BLOCK 2*/}
          <div className="pova-8-block block_2">
            <img src={figure} alt="" />
            <div className="pova-8-text">
              <h1>
                СВЕРХЪЕМКИЙ <br /> АККУМУЛЯТОР
                <br /> 6000 МАЧ
              </h1>
              <p>
                Играй, звони, смотри видео, общайся в соцсетях - заряда хватит
                надолго!
              </p>
              <div className="pova-datas">
                <div className="pova-data">
                  <span>Звонки</span>
                  <p>39 ч+ </p>
                </div>
                <div className="pova-data">
                  <span>Игры</span>
                  <p>11 ч+</p>
                </div>
                <div className="pova-data">
                  <span>Социальные сети</span>
                  <p>18 ч+</p>
                </div>
                <div className="pova-data">
                  <span>Видео</span>
                  <p>14 ч+</p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 3*/}
          <div className="pova-8-block block_3">
            <img src={figure_2} alt="" />
            <div className="pova-8-text">
              <h1>
                {" "}
                ТЕХНОЛОГИЯ ЗАЩИТЫ <br /> АККУМУЛЯТОРА <br />
                STS
              </h1>
              <p>
                Технология STS предотвращает короткие замыкания, которые могут
                возникать из-за контакта алюминиевой фольги с анодом. Таким
                образом исключается риск выхода из строя аккумулятора.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pova5SecEight;
