import React from "react";
import { useLocation, useNavigate } from "react-router"; 
import gameDes from "../reducer/DeReducer";

const ResultatsPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { brelan, totalExperiments, results } = state || {}; 

    return (
        <div>
            <h1>Résultats des expériences</h1>
            <p>Brelans obtenus : {brelan} sur {totalExperiments} essais</p>

            {results && results.length > 0 && (
                <div>
                    <h2>Résultats détaillés :</h2>
                    <ul>
                        {results.map((dice, index) => (
                            <li key={index}>
                                <strong>Expérience {index + 1}:</strong> {dice.join(", ")}{" "}
                                {dice.every((d) => d === 6) && <span>(Brelan de 6!)</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button onClick={() => navigate("/")}>Retour à l'accueil</button>
        </div>
    );
};

export default ResultatsPage;
