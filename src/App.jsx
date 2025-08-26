import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plants from "./Pages/Plants";
import Flowers from "./Pages/Flowers";
import Fertilizer from "./Pages/Fertilizer";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";
import NavBar from "./Components/Nav-Bar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
