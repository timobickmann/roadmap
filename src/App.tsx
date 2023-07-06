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
import DaisyuiSetup from "./pages/resources/DaisyuiSetup";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <div className="flex min-h-screen">
            <SidebarResources />

            <div className=" mx-2 mb-5 w-full sm:mr-5 md:mr-8 lg:mr-10">
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
                <Route
                  path="/resources/daisyui/setup"
                  element={<DaisyuiSetup />}
                />
              </Routes>
            </div>
          </div>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
