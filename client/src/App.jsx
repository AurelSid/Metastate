import { Home } from "./components";
import { Navbar } from "./components";
import { Footer } from "./components";
import { Shop } from "./components";
import { Login } from "./components";

import { CirclePointer } from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="square-pointer">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <div className="hidden md:block">
          <Footer />
        </div>
        <div className="relative"></div>
      </Router>
    </div>
  );
};

export default App;
