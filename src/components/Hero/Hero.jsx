import "./Hero.css";
import { useState } from "react"; //1st step is to import the useState hook form react

function Hero() {
  //2nd step is to initialize our state inside the component
  //const [name of the state, state setter function] = useState(the initial value of the state)
  const [myName, setMyName] = useState("Fitsum"); //state init

  // updating the state
  const handleChangeName = () => {
    setMyName("John");
  };

  return (
    <div className="hero-section">
      <h1>Welcome To the Friends Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga
        vel dolorem a, quo tenetur officiis excepturi, ducimus dignissimos totam
        ut quam reiciendis, cumque nam quae rerum beatae ad error voluptatum!
        Nulla distinctio in nobis quo earum optio est quia?
      </p>
      <br />
      <p>My name is: {myName}</p>
      <br />
      <button
        style={{ backgroundColor: "#333", color: "white" }}
        onClick={handleChangeName}
      >
        Change My Name
      </button>
    </div>
  );
}

export function Component1() {
  return <div>This is component one</div>;
}

export default Hero;
