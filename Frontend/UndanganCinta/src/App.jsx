import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Main.css";

import Home from "./Pages/Home/Home";
import Demo from "./Pages/Demo/Demo";

import LiveDemo from "./Pages/Demo/LiveDemo/LiveDemo";
function App() {
  return (
    <div className="App">
      <Router basename="/UndanganCinta/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/Demo/LiveDemo" element={<LiveDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
