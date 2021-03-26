import "../styles/index.scss";
import Recipes from "./Recipes";

function app() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi React</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
}

export default app;
