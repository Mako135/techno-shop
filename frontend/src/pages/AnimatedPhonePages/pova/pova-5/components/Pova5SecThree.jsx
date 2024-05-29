const Pova5SecThree = () => {
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/pova5/video/POVA5_pc_EN-100m.mp4";
  const frame =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova5/assets-ru/video-mask2-abe0f264.png";
  return (
    <div className="pova-3">
      <div className="pova-3-content">
        <img src={frame} alt="" />
        <video src={video} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Pova5SecThree;
