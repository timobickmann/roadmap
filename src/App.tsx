import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Css from "./pages/resources/Css";
import Tailwind from "./pages/resources/Tailwind";

function App() {
  return (
    <>
      <Router>
          <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/css" element={<Css />} />
              <Route path="/resources/tailwind" element={<Tailwind />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
