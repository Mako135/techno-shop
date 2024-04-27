import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import WhereToBuy from "./pages/WhereToBuy";
import About from "./pages/About";

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route index element={<HomePage />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App
