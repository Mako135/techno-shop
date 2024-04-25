import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import WhereToBuy from "./pages/WhereToBuy";

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
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App
