import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pova5SecTwentyTwo = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top top",
        markers: true
      }
    });

    tl.to("#phone_1", { xPercent: 157 }, 0)
      .to("#phone_2", { xPercent: 55 }, 0)
      .to("#phone_3", { xPercent: -155 }, 0)
      .to("#phone_4", { xPercent: -257 }, 0);
  }, []);
  const phone_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/phone-red-ca7e46db.png";
  const phone_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/phone-left-2-6d8e059e.png";
  const phone_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/phone-left-1-bd65619a.png";
  const phone_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/phone-right-1-2b0a98d7.png";
  const phone_5 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/phone-right-2-9e3387ff.png";

  return (
    <div className="sec-22" ref={povaRef}>
      <div className="pova-text">
        <h1>ЯРКИЕ ОБОИ</h1>
        <h3>Больше цвета и красоты</h3>
        <p>
          Наслаждайся красивыми и завораживающими визуальными эффектами.
          Реальность и фантастика сливаются воедино в буйстве красок.{" "}
        </p>
      </div>
      <div className="sec-22-phones">
        <img src={phone_3} alt="phone" className="phone-1" id="phone_1" />
        <img src={phone_2} alt="phone" className="phone-1" id="phone_2" />
        <img src={phone_1} alt="phone" className="phone-1" />
        <img src={phone_4} alt="phone" className="phone-1" id="phone_3" />
        <img src={phone_5} alt="phone" className="phone-1" id="phone_4" />
      </div>
    </div>
  );
};

export default Pova5SecTwentyTwo;
