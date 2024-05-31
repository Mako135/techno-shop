import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth > 1024 ? <DesktopMenu /> : <MobileMenu />;
};

export default Header;
