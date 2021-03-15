import * as React from "react";
import * as ReactDOM from "react-dom";

const requireDemo = require.context("./demos", false, /\.(js|tsx)$/);
const requireRaw = require.context("./demos?raw", false, /\.(js|md|tsx)$/);

const demos = requireRaw.keys();

function App() {
  return (
    <React.Fragment>
      <h1>Demos</h1>
      {demos.map((demoFileName) => {
        const Demo = requireDemo(demoFileName).default;
        return (
          <React.Fragment key={demoFileName}>
            <h2>{demoFileName}</h2>
            <pre>
              <code>{requireRaw(demoFileName)}</code>
            </pre>
            <Demo />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

const container = document.getElementById("root");
ReactDOM.render(<App />, container);
