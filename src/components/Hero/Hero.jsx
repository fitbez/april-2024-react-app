import "./Hero.css";
import { sum, multiply } from "../../utils/math";

function Hero() {
  const result = sum(3, 5, 6);
  const multiplyResult = multiply(3, 5, 6);
  return (
    <div className="hero-section">
      <h1>Welcome To the Friends Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga
        vel dolorem a, quo tenetur officiis excepturi, ducimus dignissimos totam
        ut quam reiciendis, cumque nam quae rerum beatae ad error voluptatum!
        Nulla distinctio in nobis quo earum optio est quia?
      </p>
      <p>the sum of this three numbers is: {result} </p>
      <p>the multiplication of these three numbers is: {multiplyResult} </p>
    </div>
  );
}

export function Component1() {
  return <div>This is component one</div>;
}

export default Hero;
