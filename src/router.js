import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Portofolio from "./pages/portofolio/Portofolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portofolio" element={<Portofolio />} />
    </Routes>
  );
};

export default AppRoutes;
