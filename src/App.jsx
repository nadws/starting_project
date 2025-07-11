import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedToppic , setSelectedToppic]=useState();
  function handleSelect(selectedButton){
    setSelectedToppic(selectedButton);
  }
  let tabContent = <p>Plese selected toppic</p>;
  if (selectedToppic) {
    tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedToppic].title}</h3>
            <p>{EXAMPLES[selectedToppic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedToppic].code}</code>
            </pre>
          </div>;
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
          
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedToppic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedToppic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedToppic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedToppic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
