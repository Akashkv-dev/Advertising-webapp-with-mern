import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Loginpage from "./pages/Login";
import Cartpage from "./pages/Cartpage";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </Router>
  );
}

export default App;
