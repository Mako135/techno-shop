import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Smartphones from "./pages/Smartphones";
import Accessories from "./pages/Accessories";
import WhereToBuy from "./pages/WhereToBuy";
import About from "./pages/About";
import News from "./pages/News";
import Support from "./pages/Support";
import Stocks from "./pages/Stocks";
import NewsPage from "./components/news/NewsPage";
import PhoneDetailPage from "./components/phones/PhoneDetailPage";
import Pova6Pro from "./pages/AnimatedPhonePages/pova/pova-6-6pro/Pova6Pro";
import Common30 from "./pages/AnimatedPhonePages/common/Common30";
import Pova6 from "./pages/AnimatedPhonePages/pova/pova-6-6pro/Pova6";
import Spark20 from "./pages/AnimatedPhonePages/spark/Spark20-20Pro-20ProPlus/Spark20";
import Spark20Pro from "./pages/AnimatedPhonePages/spark/Spark20-20Pro-20ProPlus/Spark20Pro";
import Spark20ProPlus from "./pages/AnimatedPhonePages/spark/Spark20-20Pro-20ProPlus/Spark20ProPlus";
import Spark20C from "./pages/AnimatedPhonePages/spark/spark20c-2024go/Spark20C";
import SearchPage from "./pages/SearchPage";
import Fold from "./pages/AnimatedPhonePages/phantom/v-fold/Fold";
import Flip from "./pages/AnimatedPhonePages/phantom/v-flip/Flip";
import DownloadPage from "./pages/DownloadPage";
import PovaNeo from "./pages/AnimatedPhonePages/pova/pova-6-neo/PovaNeo";
import PovaFive from "./pages/AnimatedPhonePages/pova/pova-5/PovaFive";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/phones" element={<Smartphones />} />
            <Route path="/phones/:id" element={<PhoneDetailPage />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/services" element={<ServicePage />} />

            <Route path="/pova/5" element={<PovaFive />} />
            <Route path="ф" element={<Pova6 />} />
            <Route path="/pova/neo" element={<PovaNeo />} />
            <Route path="/pova/6-pro" element={<Pova6Pro />} />
            <Route path="/camon/30" element={<Common30 />} />
            <Route path="/spark/c" element={<Spark20C />} />
            <Route path="/spark/20" element={<Spark20 />} />
            <Route path="/spark/20-pro" element={<Spark20Pro />} />
            <Route
              path="/spark/spark-20-pro-plus"
              element={<Spark20ProPlus />}
            />
            <Route path="/phantom/fold" element={<Fold />} />
            <Route path="/phantom/flip" element={<Flip />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
