import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Main.css";

import Home from "./Pages/Home/Home";
import Demo from "./Pages/Demo/Demo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/UndanganCinta" element={<Home />} />
          <Route path="/UndanganCinta/Demo" element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;