import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Css from "./pages/resources/Css";
import Tailwind from "./pages/resources/Tailwind";
import SidebarResources from "./components/SidebarResources";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="flex gap-20">
          <div>
            <Routes>
              <Route path="/resources/*" element={<SidebarResources />} />
            </Routes>
          </div>
          <div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/css" element={<Css />} />
              <Route path="/resources/tailwind" element={<Tailwind />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
