import "./styles.css";

export const Button = ({ text, onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick} className="button">
    {text}
  </button>
);
