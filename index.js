import { html, cp, render } from "./preact.js";
import App from "./App.js";

/** @type {CP<typeof html, typeof App>} */
const cpApp = cp(App);

render(cpApp(), document.body);
