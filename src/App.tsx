import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import Css from "./pages/resources/Css";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-700 font-mono text-gray-100">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/css" element={<Css />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
