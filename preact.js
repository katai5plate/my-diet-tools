import {
  html as _html,
  render as _render,
} from "https://unpkg.com/htm/preact/index.mjs?module";
import * as _hooks from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";

/** @type {import("htm/preact")} */
const html = _html;
/** @type {preact["render"]} */
const render = _render;
/** @type {import("preact/hooks")} */
const hooks = _hooks;

const cp = (component) => (props, children) =>
  html`<${component} ...${props}>${children}<//>`;

export { html, render, hooks, cp };
