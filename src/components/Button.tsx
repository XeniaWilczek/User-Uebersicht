type ButtonProps = {
  onClick: () => void;
  text: string;
};

function Button({ onClick, text }: ButtonProps) {
  return (
    <button className="input-container__submit-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
