import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/navbar/header";
import { FlexCol } from "./components/tw-components";
import { AnimacionCarga } from "./components/animacionCarga";
import { Search } from "./components/search/search";
import { Categories } from "./pages/categories";
const Home = lazy(() => import("./pages/home"));
const Movie = lazy(() => import("./pages/movie"));
function App() {
  const [search, setSearch] = useState("");

  return (
    <FlexCol className="min-h-screen">
      <Router>
        <Header setSearch={setSearch} search={search} />
        {search.length > 0 ? (
          <>
            <Search filter={search} setSearch={setSearch} />
          </>
        ) : (
          <Suspense fallback={<AnimacionCarga />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/category/:id/:name/" element={<Categories />} />
            </Routes>
          </Suspense>
        )}
      </Router>
    </FlexCol>
  );
}

export default App;
