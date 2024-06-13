import arrow from "../assets/arrow_left.png";
import first from "../assets/1.png";
import second from "../assets/2.png";
import ContentSection from "./ContentSection";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const DesignSection = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top center",
        end: "+=300",
      }
    });

    tl.from(".content-card", {
      y: 100,
      stagger: 0.2
    });
  }, []);

  const background =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/section-02-end-157fa9c7.jpg";
  const firstImg =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/section-02-grid-1-d19f06fd.jpg";
  const secondImg =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/section-02-grid-2-d9731e90.png";

  return (
    <div>
      <ContentSection backImg={background} backPos="bottom">
        <div className="design-inner" ref={povaRef}>
          <div className="content-card">
            <div className="design-content-header">
              <div className="design-title">
                <img src={first} alt="" />
                <h2>Кибер дизайн</h2>
              </div>
              <img src={arrow} alt="" />
            </div>
            <img src={firstImg} alt="" className="first-img" />
          </div>

          <div className="content-card" style={{ marginTop: "5vw" }}>
            <div className="design-content-header">
              <div className="design-title">
                <img src={second} alt="" />
                <h2>NCVM — метод обработки граней</h2>
              </div>
              <img src={arrow} alt="" />
            </div>
            <img src={secondImg} alt="" className="second-img" />
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default DesignSection;
