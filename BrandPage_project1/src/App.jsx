import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
