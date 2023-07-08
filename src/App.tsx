import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cube } from './components/pages/Cube/Cube';
import { Scroll } from "./components/pages/Scroll/Scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cube />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
