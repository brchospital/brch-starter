import { Routes, Route } from "react-router-dom";
import "./style/App.css";

// TODO
// 1) გვერდების დაიმპორტება
// 2) sass ცვლადების დამატება
// 3) eslint

import {
  Home,
  About,
  News,
  Departments,
  Department,
  Vacancies,
  Admin,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="departments" element={<Departments />} />
      <Route path="department/:id" element={<Department />} />
      <Route path="vacancies" element={<Vacancies />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
