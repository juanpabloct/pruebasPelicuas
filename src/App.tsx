import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/home"));
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex ">
      <Suspense fallback="Cargando">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
