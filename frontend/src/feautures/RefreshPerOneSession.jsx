import { useEffect } from "react";

const RefreshOncePerSession = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "true");
      window.location.reload();
    }
  }, []);

  return null; // Этот компонент не рендерит ничего
};

export default RefreshOncePerSession;
