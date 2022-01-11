import { render } from "solid-js/web";
import "@telekom/scale-components/dist/scale-components/scale-components.css";

import { defineCustomElements } from "@telekom/scale-components/loader";

defineCustomElements(window);

const App = () => {
  return (
    <div>
      Hello World<scale-button>Test</scale-button>
    </div>
  );
};

render(App, document.getElementById("app"));
