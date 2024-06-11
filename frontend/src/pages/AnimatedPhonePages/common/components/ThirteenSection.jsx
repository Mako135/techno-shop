import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirteenSection = () => {
  const thirteenRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: thirteenRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.from("#thirteen-wallpaper", {
      duration: 2,
      scale: 4,
      yPercent: -20
    })
      .fromTo(
        ".section-title-text, #hrz",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.2
        }
      )
      .fromTo(
        "#thirteen-frame ",
        {
          opacity: 0
        },
        {
          opacity: 1,
          y: 0,
          duration: 2
        },
        ">"
      );
  }, []);

  const hrz =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/screenSection/120hz.png";
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/screenSection/phone_cl6.png";
  const wallpaper =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30pro5g/images/screenSection/main_cl6.png";
  return (
    <div className="thirteen-section" ref={thirteenRef}>
      <div className="section-title">
        <h1
          className="section-title-text"
          style={{
            marginBottom: "5vw",
            opacity: 0
          }}
        >
          Красочное изображение. <br /> Объемное звучание
        </h1>
        <div className="thirteen-section-phone">
          <img src={hrz} alt="" id="hrz" />
          <div className="phone-frame">
            <img src={frame} alt="" id="thirteen-frame" />
            <img src={wallpaper} alt="" id="thirteen-wallpaper" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirteenSection;
