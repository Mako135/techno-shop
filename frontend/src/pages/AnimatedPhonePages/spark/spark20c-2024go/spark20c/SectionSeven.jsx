import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionSeven = () => {
  

  const video_1 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec8V6.mp4";
  const video_2 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec8V1.mp4";
  const video_3 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec8V2.mp4";
  const video_4 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec8V4.mp4";
  const video_5 =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec8V6.mp4";
  return (
    <div className="sec-7">
      <div className="icon_container">
        <div className="title">Вы в центре внимания!</div>
        <div className="icon icon5"></div>
        <div className="icon icon3"></div>
      </div>
      <div className="sec-7-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false
          // }}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
        >
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_1} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_2} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_3} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_4} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_4} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pic-box">
              <div className="pic-border"></div>
              <div className="pic">
                <video src={video_5} muted autoPlay loop></video>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSeven;
