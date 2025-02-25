import './App.css';
import { Routes, Route } from "react-router";
import Lien from "./component/Lien.jsx";
import Home from "./page/Home.jsx";
import ChoixDenomination from "./page/ChoixDeno.jsx";

const App = () => {
  return (
    <>
      <h1>Bienvenue aux jeux de dé</h1>
      <nav style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <Lien label="Home" to="/" />
        <Lien label="Changer Dénomination" to="/changer-denomination" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changer-denomination" element={<ChoixDenomination />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
};

export default App;
