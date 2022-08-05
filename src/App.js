import { Routes, Route } from "react-router-dom";
import "./style/App.css";

// TODO
// 1) გვერდების დაიმპორტება
// 2) sass ცვლადების დამატება
// 3) eslint

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
