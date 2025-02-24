import './App.css';
import { Routes, Route } from "react-router";   
import Lien from "./component/Lien.jsx";
import Description from "./page/Description.jsx";
import HomePage from "./page/Home.jsx";
import ResultatsPage from "./page/resutat.jsx"; 

const App = () => {
  return (
    <>
      <h1>Bienvenue aux jeux de dé</h1>
      <nav style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center"
      }}>
        <Lien label={"Home"} to={"/"} /> 
        <Lien label="Description" to="/description" />
        <Lien label="Résultats" to="/stats" />  
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/description" element={<Description />} />
        <Route path="/stats" element={<ResultatsPage />} />  
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
};

export default App;
