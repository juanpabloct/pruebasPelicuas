import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/navbar/header";
import { FlexCol } from "./components/tw-components";
import { AnimacionCarga } from "./components/animacionCarga";
const Home = lazy(() => import("./pages/home"));
function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <FlexCol className="">
      <Router>
        <Header setSearch={setSearch} search={search} />
        {search.length > 0 ? (
          <>
            <AnimacionCarga />
          </>
        ) : (
          <Suspense fallback="Cargando">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        )}
      </Router>
    </FlexCol>
  );
}

export default App;
