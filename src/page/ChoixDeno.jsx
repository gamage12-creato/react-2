import { useDispatch } from "react-redux";
import { setDenominations } from "../store/action/action";
import Bouton from "../component/Button";
import { useNavigate } from "react-router";
import "../CSS/Style.css"; 

const ChoixDenomination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const denominationsList = [
    [1, 5, 10, 20, 50, 100],
    [1, 2, 5, 10, 20, 30, 50],
    [1, 10, 20, 30, 40, 50, 100]
  ];

  const changeDenomination = (denominations) => {
    dispatch(setDenominations(denominations));
    navigate("/");  
  };

  return (
    <div className="container">
      <h1 className="title">Choisissez une dénomination</h1>
      {denominationsList.map((deno, index) => (
        <Bouton key={index} onClick={() => changeDenomination(deno)}>
          Dénomination {deno.join(', ')}
        </Bouton>
      ))}
    </div>
  );
};

export default ChoixDenomination;
