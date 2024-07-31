import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import Gallery from "./components/Gallery";
import Informations from "./components/Informations";
import ProgramSession from "./components/ProgramSession";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programSession" element={<ProgramSession />} />
      </Routes>
    </>
  );
}

export default App;
