import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import Header from "./components/Header";
import SidebarResources from "./components/SidebarResources";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import ViteResources from "./pages/resources/ViteResources";
import ViteSetup from "./pages/resources/ViteSetup";
import ViteHowTos from "./pages/resources/ViteHowTos";
import TailwindResources from "./pages/resources/TailwindResources";
import TailwindSetup from "./pages/resources/TailwindSetup";
import TailwindHowTos from "./pages/resources/TailwindHowTos";
import DaisyuiSetup from "./pages/resources/DaisyuiSetup";
import DaisyuiResources from "./pages/resources/DaisyuiResources";
import DaisyuiHowTos from "./pages/resources/DaisyuiHowTos";
import CssSetup from "./pages/resources/CssSetup";
import CssResources from "./pages/resources/CssResources";
import CssHowTos from "./pages/resources/CssHowTos";
import ReactSetup from "./pages/resources/ReactSetup";
import ReactResources from "./pages/resources/ReactResources";
import ReactHowTos from "./pages/resources/ReactHowTos";
import ToolsResources from "./pages/resources/ToolsResources";
import JsResources from "./pages/resources/JsResources";
import TsResources from "./pages/resources/TsResources";

function App() {
  const { currentTheme } = useContext(AppContext);
  return (
    <>
      <Router>
        <div
          className="appContainer flex min-h-screen w-screen"
          data-theme={currentTheme}
        >
          <SidebarResources />

          <div className=" mb-5 w-full px-1 sm:mr-5 md:mr-8 lg:mr-10">
            <Header />
            <main>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
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
                  path="/resources/daisyui"
                  element={<DaisyuiResources />}
                />
                <Route
                  path="/resources/daisyui/setup"
                  element={<DaisyuiSetup />}
                />
                <Route
                  path="/resources/daisyui/howtos"
                  element={<DaisyuiHowTos />}
                />
                <Route path="/resources/css" element={<CssResources />} />
                <Route path="/resources/css/setup" element={<CssSetup />} />
                <Route path="/resources/css/howtos" element={<CssHowTos />} />
                <Route path="/resources/react" element={<ReactResources />} />
                <Route path="/resources/react/setup" element={<ReactSetup />} />
                <Route
                  path="/resources/react/howtos"
                  element={<ReactHowTos />}
                />
                <Route path="/resources/tools" element={<ToolsResources />} />
                <Route path="/resources/js" element={<JsResources />} />
                <Route path="/resources/ts" element={<TsResources />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
