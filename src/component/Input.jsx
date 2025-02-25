import "../CSS/Style.css"; 
const Input = ({ value, onChange }) => (
    <input
        type="number"
        value={value}
        onChange={onChange}
        className="input-field"
        placeholder="Saisir le montant"
    />
);

export default Input;