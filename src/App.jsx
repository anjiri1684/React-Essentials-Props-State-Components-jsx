import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConcept />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Examples />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
