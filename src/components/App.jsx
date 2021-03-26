import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

function app() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi React</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSvg} alt="swordSvg" width="250" />
        <Recipes />
      </main>
    </>
  );
}

export default app;
