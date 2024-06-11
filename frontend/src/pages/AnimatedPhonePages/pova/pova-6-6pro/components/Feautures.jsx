import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const povaRef = useRef();

  useLayoutEffect(() => {
    const onLoad = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: povaRef.current,
          start: "-=200px center",
          end: "+=200",
          markers: true
        }
      });

      tl.from(".card", {
        y: 100,
        opacity: 0,
        stagger: 0.2
      }).to(".card", {
        y: 0,
        opacity: 1,
        duration: 0.2
      });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div
      ref={povaRef}
      id="features"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        width: "80vw",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="card" style={{ position: "relative", zIndex: 1 }}>
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-1-2be3a59d.jpg"
          title="Технологичный дизайн"
        />
      </div>
      <div className="card" style={{ position: "relative", zIndex: 1 }}>
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
      <div className="card" style={{ position: "relative", zIndex: 1 }}>
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
      <div className="card" style={{ position: "relative", zIndex: 1 }}>
        <Card
          imageSrc="https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova6/assets-ru/image-2-874a5b7a.jpg"
          title="Example Card"
        />
      </div>
    </div>
  );
};

export default Features;
