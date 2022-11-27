//import ReactDOM from "react-dom";
import App from "./App.js";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

//ReactDOM.render(<App />, document.querySelector(".pagetoda"));
//test