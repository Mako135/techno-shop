import { useEffect } from "react";

const Stocks = () => {
  useEffect(() => {
    document.title = "Акции | Tecno";
  }, []);
  return (
    <div>Stocks</div>
  )
}

export default Stocks