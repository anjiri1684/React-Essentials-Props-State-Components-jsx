import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import { useState } from "react";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function HandleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="example">
      <menu>
        <TabButton
          isSlected={selectedTopic === "components"}
          onSelect={() => HandleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "jsx"}
          onSelect={() => HandleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "props"}
          onSelect={() => HandleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "state"}
          onSelect={() => HandleClick("state")}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </section>
  );
}

export default Examples;
