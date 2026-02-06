import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, Gallery } from "./components";

function App() {
  return (
    <div className="overflow-x-hidden font-['Arlon',_'Inter',_system-ui,_sans-serif]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
