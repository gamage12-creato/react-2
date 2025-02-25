// component/Denomination.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMontant, setReste, setReset } from "../store/action/action"; // Ajouter setReset
import { selectMontant, selectDenominations, selectReste } from "../store/selector/selector";
import Input from "./Input";
import Bouton from "./Button";
import { useNavigate } from "react-router";
import "../CSS/Style.css"; 

const Denomination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const montant = useSelector(selectMontant);
  const denominations = useSelector(selectDenominations);
  const reste = useSelector(selectReste);

  const [montantLocal, setMontantLocal] = useState(montant);

  const calculerDenomination = () => {
    let montantRestant = montantLocal;
    const rendu = {};

    denominations.forEach((deno) => {
      rendu[deno] = Math.floor(montantRestant / deno);
      montantRestant %= deno;
    });

    dispatch(setReste(rendu));
  };

  const cal = () => {
    dispatch(setMontant(montantLocal));
    calculerDenomination();
  };

  const changeDenomination = () => {
    navigate("/changer-denomination");
  };

  const reinitialise = () => {
    dispatch(setReset()); 
    setMontantLocal(0); 
  };

  return (
    <div className="container">
      <h1 className="title">Calculer les Dénominations</h1>
      <Input value={montantLocal} onChange={(e) => setMontantLocal(Number(e.target.value))} />
      <Bouton onClick={cal}>Calculer Dénomination</Bouton>
      <Bouton onClick={changeDenomination}>Changer Dénomination</Bouton>
      <Bouton onClick={reinitialise}>Réinitialiser</Bouton> 

      <div className="result-item">
        {Object.entries(reste).length > 0 ? (
          Object.entries(reste).map(([deno, count]) => (
            <p key={deno}>
              Dénomination {deno} unité(s) : {count}
            </p>
          ))
        ) : (
          <p>Aucun résultat disponible. Veuillez entrer un montant.</p>
        )}
      </div>
    </div>
  );
};

export default Denomination;
