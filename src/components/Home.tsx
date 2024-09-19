import confetti from "canvas-confetti";
import Logo from "../assets/ji-logo.png";
import BeerLogo from "../assets/beerjs.svg";
import { useAtom } from "jotai";
import { countAtom, showLegendAtom } from "../store/storeAtoms";

const Home = () => {
  const [count, setCount] = useAtom(countAtom);
  const [showLegend, setShowLegend] = useAtom(showLegendAtom);

  const handleClick = () => {
    confetti();
    setShowLegend(true);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    if (count === 0) return;

    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <img src={Logo} className="logo" alt="Beer Js Cba logo" />
      <h1>State Management with Jōtai</h1>

      <div className="card">
        <h3>Counter {count}</h3>
        <div className="btns">
          <button onClick={handleAdd}>➕</button>
          <button onClick={handleReset}>RESET</button>
          <button onClick={handleSub}>➖ </button>
        </div>
        <p className={`${showLegend ? "block" : "hidden"}`}>
          Let's go Jōtai, and <code>Have another Beer</code>
        </p>
        <img
          onClick={handleClick}
          src={BeerLogo}
          className={`logo beerlogo hover:animate-bounce`}
          alt="Beer Js Cba logo"
        />
      </div>
    </div>
  );
};

export default Home;
