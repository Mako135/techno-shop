import styled from "styled-components";
import PropTypes from "prop-types";

const VideoContainer = styled.div`
  perspective: 1000px;
  width: 50%;
  height: 300px; /* Высота контейнера */
  margin: 50px auto;
  overflow: hidden;
  transform-style: preserve-3d;
`;

const VideoFrame = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotateY(
    30deg
  ); /* Измените угол для достижения желаемого эффекта */
`;

const VideoPlayer = ({ src }) => (
  <VideoContainer>
    <VideoFrame controls>
      <source src={src} type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </VideoFrame>
  </VideoContainer>
);

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired
};


export default VideoPlayer;
