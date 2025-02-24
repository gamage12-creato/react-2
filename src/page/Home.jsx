import { useNavigate } from "react-router"; 
import gameDes from "../reducer/DeReducer";
import React, { useState } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const [state, dispatch] = gameDes();
    const { brelan, totalExperiments, results } = state;
    const [numberExperiments, setNumberExperiments] = useState(100);

    const experimentChange = (e) => {
        setNumberExperiments(Number(e.target.value));
    };

    const lancerDe = (e) => {
        e.preventDefault();
        dispatch({ type: "DE", payload: { numberExperiments } });
    };

    const resultsF = () => {
        navigate("/stats", { state: { brelan, totalExperiments, results } });
    };

    return (
        <div>
            <h1>Jeu de dés</h1>
            <form onSubmit={lancerDe}>
                <div>
                    <label>Nombre d'expériences :</label>
                    <input 
                        type="number" 
                        value={numberExperiments} 
                        onChange={experimentChange} 
                        min="3"
                    />
                </div>
                <button type="submit">Lancer</button>
            </form>
            <p>Brelans obtenus : {brelan} sur {totalExperiments} essais</p>
            <button onClick={resultsF}>Voir les résultats</button>
        </div>
    );
};

export default HomePage;
