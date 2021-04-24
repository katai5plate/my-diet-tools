import { html } from "../../preact.js";

/**
 * @param {Object} props
 * @param {{id: string, name: string}[]} props.list
 * @param {(id: string) => void} props.setter
 */
export default ({ currentId, list = [], setter = () => {} }) => {
  return html`
    <ul class="nav nav-tabs">
      ${list.map(
        ({ id, name }) => html`<li class="nav-item">
          <a
            class="nav-link ${currentId === id ? "active" : ""}"
            onclick=${() => setter(id)}
            >${name}</a
          >
        </li>`
      )}
    </ul>
  `;
};
