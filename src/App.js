import { Routes, Route } from "react-router-dom";
import "./style/App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    // <div className="App">
    //   <div className="header">
    //     <h1>header</h1>
    //   </div>
    //   <div className="content">
    //     <h1>content</h1>
    //     <Layout />
    //   </div>
    //   <div className="footer">
    //     <h1>footer</h1>
    //   </div>
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
