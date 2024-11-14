import "./Button.css";

function Button(props) {
  return (
    <>
      <button style={{ backgroundColor: props.x }}>{props.name}</button>
    </>
  );
}

export default Button;
