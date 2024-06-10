import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import FoldSlider from "../feautures/FoldSlider";

gsap.registerPlugin(ScrollTrigger);

const FoldSecEight = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fold-eight-content",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: true,
        ease: "back.out"
      }
    });

    tl.to(".fold-eight-content", {
      xPercent: -70
    });
  }, []);
  const figure =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/cameraTotalSection/backPhone.jpg";
  return (
    <div className="fold-eight">
      <div className="title">
        Пять камер высокой четкости для создания безупречных фото <br />
        Новые горизонты мобильной фотографии
      </div>
      <div className="desc">
        Три основные камеры высокой четкости + Две фронтальные камеры на главном
        и дополнительном экране подарят невероятное удовольствие от съемки.
        Создай свои лучшие фотографии!
      </div>
      <div className="fold-eight-content">
        <div className="fold-left">
          <h1>Основной блок камер</h1>

          <div className="datas">
            <div className="data">
              <span>Главная камера</span>
              <h3>50 Мп</h3>
              <p>1/1.3 размер матрицы</p>
              <p>f/1.85 ширина диафрагмы</p>
            </div>
            <div className="data">
              <span>Телеобъектив</span>
              <h3>50 Мп</h3>
              <p>Двухкратный оптический зум</p>
            </div>
            <div className="data">
              <span>Сверхширокоугольная камера</span>
              <h3>13 Мп</h3>
              <p>Угол обзора 120°</p>
            </div>
          </div>
        </div>
        <div className="fold-eight-img">
          <img src={figure} alt="" />
        </div>
        <div className="left-12">
          <h1>Основной блок камер</h1>

          <div className="datas">
            <div className="data">
              <span>Главная камера</span>
              <h3>50 Мп</h3>
              <p>1/1.3 размер матрицы</p>
              <p>f/1.85 ширина диафрагмы</p>
            </div>
            <div className="data">
              <span>Телеобъектив</span>
              <h3>50 Мп</h3>
              <p>Двухкратный оптический зум</p>
            </div>
            <div className="data">
              <span>Сверхширокоугольная камера</span>
              <h3>13 Мп</h3>
              <p>Угол обзора 120°</p>
            </div>
          </div>
        </div>
        <FoldSlider />
      </div>
    </div>
  );
};

export default FoldSecEight;
