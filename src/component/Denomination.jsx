import { useDispatch, useSelector } from "react-redux";
import { selectMontant, selectDenominations, selectReste } from "../store/selector/selector";
import { setMontant, setReste, setReset } from "../store/action/action";
import Input from "./Input";
import Button from "./Button";
import "../CSS/Style.css"; 

const Denomination = () => {
    const dispatch = useDispatch();
    const montant = useSelector(selectMontant);
    const denominations = useSelector(selectDenominations);
    const reste = useSelector(selectReste);

    const calculerDenomination = () => {
        let montantRestant = montant;
        const rendu = {};

        denominations.forEach((deno) => {
            rendu[deno] = Math.floor(montantRestant / deno);
            montantRestant %= deno;
        });

        dispatch(setReste(rendu));
    };

    const denoReset = () => {
        dispatch(setReset());
    };

    return (
        <div className="container">
            <h1 className="title">Saisir le montant</h1>
            <Input value={montant} onChange={(e) => dispatch(setMontant(Number(e.target.value)))} />
            <div className="button-group">
                <Button onClick={calculerDenomination}>Dénomination</Button>
                <Button onClick={denoReset}>Reset</Button>
            </div>
            <div className="result-item">
                {Object.entries(reste).map(([deno, count]) => (
                    <p key={deno}>
                        Dénomination {deno} unité(s) : {count}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Denomination;