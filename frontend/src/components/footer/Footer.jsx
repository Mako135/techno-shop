import { useEffect, useState } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import PropTypes from "prop-types";

const Footer = ({ className }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth > 1024 ? (
    <DesktopFooter className={className} />
  ) : (
    <MobileFooter className={className} />
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
