import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

const Design = ({ backImg, mobImg, frontImg, children, width }) => {
  gsap.registerPlugin(ScrollTrigger);
  const povaRef = useRef();
  const [bgImage, setBgImage] = useState(backImg);

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth < 768) {
        setBgImage(mobImg);
      } else {
        setBgImage(backImg);
      }
    };

    window.addEventListener("resize", updateBgImage);
    updateBgImage();

    return () => window.removeEventListener("resize", updateBgImage);
  }, [backImg, mobImg]);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: povaRef.current,
        start: "+=200 center",
        end: "+=300",
      }
    });

    tl.from(".content", {
      scale: 0.3,
      opacity: 0
    }).to(".content", {
      y: 0,
      scale: 1,
      opacity: 1
    });
    tl.from("#figure", {
      scale: 0.3,
      opacity: 0
    });
    tl.to("#figure", {
      scale: 1,
      opacity: 1
    });
  }, []);

  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={povaRef}
    >
      <img src={frontImg} alt="Изображение 2" id="figure" width={width} />

      <div className="content">{children}</div>
    </div>
  );
};

Design.propTypes = {
  backImg: PropTypes.string.isRequired,
  mobImg: PropTypes.string.isRequired,
  frontImg: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Design;
