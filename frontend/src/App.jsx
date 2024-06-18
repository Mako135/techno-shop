import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Accessories from "./pages/Accessories";
import WhereToBuy from "./pages/WhereToBuy";
import About from "./pages/about/About";
import News from "./pages/News/News";
import Support from "./pages/Support";
import PhoneDetailPage from "./pages/phone/PhoneDetailPage";
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
import Smartphones from "./pages/phone/Smartphones";
import ComparePhones from "./pages/phone/ComparePhones";
import SparkGo from "./pages/AnimatedPhonePages/spark/spark20c-2024go/SparkGo";
import NewsPage from "./pages/News/NewsPage";
import Stocks from "./pages/stocks/Stocks";
import StocksDetailPage from "./pages/stocks/StocksDetailPage";
import TermsOfUse from "./pages/TermsOfUse";
import PolicyPage from "./pages/PolicyPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/phones" element={<Smartphones />} />
          <Route path="/phones/:phoneId" element={<PhoneDetailPage />} />
          <Route path="/phones/compare" element={<ComparePhones />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stocks/:stockId" element={<StocksDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/services" element={<ServicePage />} />

          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/policy" element={<PolicyPage />} />

          <Route path="/pova-5" element={<PovaFive />} />
          <Route path="/pova-6" element={<Pova6 />} />
          <Route path="/pova-6-neo" element={<PovaNeo />} />
          <Route path="/pova-6-pro" element={<Pova6Pro />} />
          <Route path="/camon-30" element={<Common30 />} />
          <Route path="/spark-c" element={<Spark20C />} />
          <Route path="/spark-go-2024" element={<SparkGo />} />
          <Route path="/spark-20" element={<Spark20 />} />
          <Route path="/spark-20-pro" element={<Spark20Pro />} />
          <Route path="/spark-20-pro-plus" element={<Spark20ProPlus />} />
          <Route path="/phantom-fold" element={<Fold />} />
          <Route path="/phantom-v-flip-5g" element={<Flip />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
