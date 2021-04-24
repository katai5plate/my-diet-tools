import { html } from "../../preact.js";

/**
 * @param {Object} props
 * @param {(string | number)[][]} props.list
 * @param {boolean} props.labelColumn
 */
export default ({ list = [], labelColumn = false }) => {
  if (list.length === 0) return;
  const [labels, ...bodies] = list;
  return html`
    <table class="table">
      <thead>
        <tr>
          ${labels.map((x) => html`<th scope="col">${x}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${bodies.map(
          (y) =>
            html`<tr>
              ${y.map((x, i) =>
                labelColumn && i === 0
                  ? html`<th scope="row">${x}</th>`
                  : html`<td>${x}</td>`
              )}
            </tr>`
        )}
      </tbody>
    </table>
  `;
};
