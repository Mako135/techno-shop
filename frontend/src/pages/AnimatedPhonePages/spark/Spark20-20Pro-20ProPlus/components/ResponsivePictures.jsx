import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResponsivePictures = ({
  large,
  medium,
  small,
  animate,
  padding,
  color
}) => {
  const containerRef = useRef(null);
  const pictureRef = useRef(null);

  useLayoutEffect(() => {
    if (animate) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom center",
          end: "+=400",
          scrub: true
        }
      });

      tl.to(containerRef.current, {
        duration: 2,
        scale: 0.9,
        opacity: 0.7
      });
    }
  }, [animate]);

  return (
    <div ref={containerRef}>
      <picture ref={pictureRef}>
        <source srcSet={large} media="(min-width: 1200px)" />
        <source srcSet={medium} media="(min-width: 768px)" />
        <img
          src={small}
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            padding: `${padding}`,
            backgroundColor: `${color}`
          }}
        />
      </picture>
    </div>
  );
};

ResponsivePictures.propTypes = {
  small: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animate: PropTypes.bool
};

export default ResponsivePictures;
