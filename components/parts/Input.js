import { html } from "../../preact.js";

export default ({
  id,
  name,
  type = "number",
  indent = false,
  setter = () => {},
  caption = "",
  tabindex,
  initial,
  prefix,
  suffix,
}) => {
  const defualtValue = (() => {
    switch (type) {
      case "number":
        return 0;
      default:
        return "";
    }
  })();
  const onChange = ({ target: { value } }) => setter(value || defualtValue);
  return html`
    <div class="mb-3 ${indent ? "mx-3" : ""}">
      <label class="form-label" for=${id}>${name}</label>
      <div class="input-group">
        ${prefix &&
        html`<div class="input-group-append">
          <span class="input-group-text">${prefix}</span>
        </div>`}
        <input
          class="form-control"
          id=${id}
          type=${type}
          onkeyup=${onChange}
          onchange=${onChange}
          tabindex=${tabindex}
          defaultValue=${initial || ""}
        />
        ${suffix &&
        html`<div class="input-group-append">
          <span class="input-group-text">${suffix}</span>
        </div>`}
      </div>
      <div class="form-text">${caption}</div>
    </div>
  `;
};
