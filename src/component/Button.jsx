import "../CSS/Style.css"; 
const Bouton = ({ onClick, children }) => (
    <button onClick={onClick} className="button">
        {children}
    </button>
);

export default Bouton;