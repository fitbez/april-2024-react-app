import "./Button.css";

function Button(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: props.x, marginRight: "10px" }}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
