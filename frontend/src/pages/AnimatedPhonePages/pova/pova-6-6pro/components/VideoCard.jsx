import { useRef, useState } from "react";
import playButtonImage from "../assets/play.png";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const VideoCard = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=300",
      }
    });

    tl.from(videoRef.current, {
      y: 100,
      opacity: 0.5
    }).to(videoRef.current, {
      y: 0,
      opacity: 1
    });
  }, []);

  const handleImageClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    // Set the video start time to 2 seconds
    videoRef.current.currentTime = 1;
  };

  return (
    <div
      style={{ position: "relative", textAlign: "center" }}
      ref={containerRef}
    >
      <video
        ref={videoRef}
        onClick={handleImageClick}
        onLoadedMetadata={handleLoadedMetadata}
        className="videocard-video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <img
          ref={playButtonRef}
          src={playButtonImage}
          alt="Play Button"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "10vw",
            transform: "translate(-50%, -50%)",
            cursor: "pointer"
          }}
          onClick={handleImageClick}
        />
      )}
    </div>
  );
};

VideoCard.propTypes = {
  src: PropTypes.string.isRequired
};

export default VideoCard;
