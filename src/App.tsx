import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/navbar/header";
import { FlexCol } from "./components/tw-components";
import { AnimacionCarga } from "./components/animacionCarga";
import { Search } from "./components/search/search";
import { MenuPhone } from "./components/navbar/menuPhone";
const Home = lazy(() => import("./pages/home"));
function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={setSearch} search={search} />
      {search.length > 0 ? (
        <>
          <Search filter={search} />
        </>
      ) : (
        <Suspense fallback={<AnimacionCarga />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}

export default App;
