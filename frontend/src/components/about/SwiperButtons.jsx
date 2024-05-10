import { useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSwiper } from "swiper/react";

const SwiperButtons = () => {
    const swiper = useSwiper();
    const [slides, setSlides] = useState(3);

  return (
    <div>
      <div className="navigation">
        <MdKeyboardDoubleArrowLeft
          className="navigation-btn"
          onClick={() => swiper.slidePrev(setSlides(slides - 1))}
        />
        <MdKeyboardDoubleArrowRight
          className="navigation-btn"
          onClick={() => swiper.slideNext(setSlides(slides + 1))}
        />
      </div>
    </div>
  );
}

export default SwiperButtons