import ResponsivePictures from "../../components/ResponsivePictures";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const SecondBanner = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#spark-20-sec-two",
        start: "bottom center",
        end: "+=400",
        scrub: true,
      },
    });

    tl.to("#spark-20-sec-two", {
      duration: 2,
      scale: 0.9,
      opacity: 0.7,
    });
  }, []);
  const large =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_pc.png";
  const medium =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_m.jpg";
  const small =
    "https://d3fyizz0b46qgr.cloudfront.net/global/ru/phones/spark-20-proplus/2_m.jpg";
  return (
    <div className="sec-two" id="spark-20-sec-two">
      <ResponsivePictures
        large={large}
        medium={medium}
        small={small}
        color="#fff"
      />
    </div>
  );
};

export default SecondBanner;
