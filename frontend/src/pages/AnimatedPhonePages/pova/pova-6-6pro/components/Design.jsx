import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

const Design = ({backImg, frontImg, children, width}) => {
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
    <div
      className="image-container"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <img src={frontImg} alt="Изображение 2" id="figure" width={width} />

      <div className="content">{children}</div>
    </div>
  );
};

Design.propTypes = {
  backImg: PropTypes.string.isRequired,
  frontImg: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Design;
