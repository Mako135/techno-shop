import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionFiveFirstCard from "../../components/SectionFiveFirstCard";
import SectionFiveSecondCard from "../../components/SectionFiveSecondCard";
import SectionFiveThirdCard from "../../components/SectionFiveThirdCard";


gsap.registerPlugin(ScrollTrigger);

const SparkSectionFive = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-five",
        start: "bottom center",
        end: "+=400",
        scrub: true,
        markers: true
      }
    });

    tl.to(".section-five", {
      y: -50,
      duration: 2,
      scale: 0.9,
      opacity: 0.7
    });
  }, []); //

  const video =
    "https://d3fyizz0b46qgr.cloudfront.net/global/spark-20-pro/en/dist/video/sec5PcSelfie.mp4";
  return (
    <div className="section-five">
      <div className="section-titles-4">
        <p>
          <span>Удивительно ярко.</span>
        </p>
        <p>
          <span>Ослепительно красиво</span>
        </p>
      </div>

      <div className="section-first-content five-sec-content">
        <header>
          <video src={video} muted autoPlay id="camera-video" loop></video>
          <div className="section-right">
            <h2 className="section-right-title">32 Мп безупречные селфи</h2>
            <p className="section-right-subtitle">
              Яркие фото даже глубокой ночью
            </p>
            <p className="section-right-desc">
              Станьте суперзвездой! SPARK запечатлеет вас во всей красе
              благодаря фронтальной AI-камере 32 Мп с широким углом обзора 88.9°
              Безупречные селфи в любом месте и в любое время! f/2.2
            </p>

            <div className="section-right-features">
              <div className="section-right-feature">
                <h4>f/2.2</h4> <p>широкая диафрагма</p>
              </div>
              <div className="section-right-feature">
                <h4>5 линз</h4> <p>высокая светопроницаемость</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="section-five-cards">
        <SectionFiveFirstCard />
        <SectionFiveSecondCard />
        <SectionFiveThirdCard />
      </div>
    </div>
  );
};


export default SparkSectionFive;
