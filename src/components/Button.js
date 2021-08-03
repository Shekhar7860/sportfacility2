import "./Button.css";
const Button = ({ title, color }) => {
  return (
    <button className={color == "green" ? "buttonGreen" : "buttonBlue"}>
      {title}
    </button>
  );
};

export default Button;
