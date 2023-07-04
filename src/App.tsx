import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SidebarResources from "./components/SidebarResources";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import ViteResources from "./pages/resources/ViteResources";
import ViteSetup from "./pages/resources/ViteSetup";
import ViteHowTos from "./pages/resources/ViteHowTos";
import TailwindResources from "./pages/resources/TailwindResources";
import TailwindSetup from "./pages/resources/TailwindSetup";
import TailwindHowTos from "./pages/resources/TailwindHowTos";

function App() {
  return (
    <>
      <div className="flex">
        <Router>
          <Routes>
            <Route path="/resources/*" element={<SidebarResources />} />
          </Routes>
          
          <div className="mx-5 container md:mx-10 lg:mx-20 mb-5 w-full">
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/vite" element={<ViteResources />} />
              <Route path="/resources/vite/setup" element={<ViteSetup />} />
              <Route path="/resources/vite/howtos" element={<ViteHowTos />} />
              <Route
                path="/resources/tailwind"
                element={<TailwindResources />}
              />
              <Route
                path="/resources/tailwind/setup"
                element={<TailwindSetup />}
              />
              <Route
                path="/resources/tailwind/howtos"
                element={<TailwindHowTos />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
