import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionFive = () => {
  useEffect(() => {
    const video = videoRef.current;

    ScrollTrigger.create({
      trigger: video,
      start: "top center",
      end: "+500 center",
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
      markers: true
    });

  }, []);

  const videoRef = useRef(null);
  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20C/new/dist/video/sec6Pc.mp4";
  return (
    <div className="sec-5">
      <video src={video} ref={videoRef}></video>
      <div className="text_wrapper">
        <div className="title-5">
          Фронтальная камера 8 Мп <br /> с двойной вспышкой
        </div>
        <div className="desc-5">
          Днем или ночью, на улице или в помещении — безупречные селфи теперь
          всегда с вами. Камера 8 Мп с двойной вспышкой и улучшенной подсветкой
          подарят красивые и четкие снимки. Вы также можете воспользоваться
          коллекцией фильтров, которые разработаны специально для разных тонов
          кожи.Теперь ваша красота всегда на переднем плане
        </div>
      </div>
      <div className="pic_box">
        <div className="sec-5-phone"></div>
        <div className="light"> </div>
        <div className="param1">
          <div className="title">Super Night</div>
          <div className="desc">Съемка в темных условиях</div>
        </div>
        <div className="param2">
          <div className="title">8 Мп</div>
          <div className="desc">Безупречные селфи</div>
        </div>
        <div className="param3">
          <div className="title">1.12 мкм</div>
          <div className="desc">Увеличенный пиксель</div>
        </div>
        <div className="param4">
          <div className="title">Двойная вспышка</div>
          <div className="desc">Естественная подсветка</div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
