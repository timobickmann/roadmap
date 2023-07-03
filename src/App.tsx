import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Css from "./pages/resources/Css";
import ViteResources from "./pages/resources/ViteResources";
import ViteSetup from "./pages/resources/ViteSetup";
import TailwindResources from "./pages/resources/TailwindResources";
import TailwindSetup from "./pages/resources/TailwindSetup";
import SidebarResources from "./components/SidebarResources";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/resources/*" element={<SidebarResources />} />
        </Routes>
        <Header />
        <div className="my-20 px-48">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/css" element={<Css />} />
            <Route path="/resources/vite" element={<ViteResources />} />
            <Route path="/resources/vite/setup" element={<ViteSetup />} />
            <Route path="/resources/tailwind" element={<TailwindResources />} />
            <Route
              path="/resources/tailwind/setup"
              element={<TailwindSetup />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
