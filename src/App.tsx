import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-700 font-mono text-gray-100">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
