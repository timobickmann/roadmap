import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Css from "./pages/resources/Css";
import TailwindResources from "./pages/resources/TailwindResources";
import TailwindSetup from "./pages/resources/TailwindSetup";
import SidebarResources from "./components/SidebarResources";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <div>
            <Routes>
              <Route path="/resources/*" element={<SidebarResources />} />
            </Routes>
          </div>
          <div className="w-full ml-20">
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/css" element={<Css />} />
                <Route
                  path="/resources/tailwind"
                  element={<TailwindResources />}
                />
                <Route
                  path="/resources/tailwind/setup"
                  element={<TailwindSetup />}
                />
              </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
