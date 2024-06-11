import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

const Ramka = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "top center",
        end: "center center",
        markers: true // Optional, for debugging
      }
    });

    tl.from("#front-image", {
      y: "-14%",
      x: "-12%",
      duration: 1,
      borderRadius: "30px"
    });
  }, []);
  const back =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter3-beze-image-0741a5a1.jpg";
  const front =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6-normal/assets-ru/chapter3-beze-size-81c42abf.jpg";
  return (
    <div className="ramka" ref={povaRef}>
      <h1 className="pova-title">1.3 мм сверхтонкая рамка экрана</h1>
      <h2 className="pova-subtitle">полный визуальный охват</h2>
      <p className="pova-desc">
        Рамки вокруг экрана стали еще меньше: боковые сузились до 1.3 мм, а
        верхняя и нижняя до 2.1 мм. Соотношение экрана к корпусу в POVA 6 на 4%
        лучше, чем в моделях предыдущего поколения
      </p>
      <div className="ramka-images">
        <img src={front} alt="" id="front-image"/>

        <img src={back} alt="" />
      </div>
    </div>
  );
};

export default Ramka;
