import { html, cp, hooks } from "./preact.js";
import NutrientCalc from "./components/pages/NutrientCalc.js";
import Nav from "./components/parts/Nav.js";

const { useState } = hooks;

/** @type {CP<typeof html, typeof NutrientCalc>} */
const cpNutrientCalc = cp(NutrientCalc);
/** @type {CP<typeof html, typeof Nav>} */
const cpNav = cp(Nav);

export default () => {
  const list = [
    { id: "NutrientCalc", name: "栄養素計算機" },
    //
  ];
  const [currentId, setCurrentId] = useState(list[0].id);
  return html`
    <div class="container">
      ${cpNav({
        currentId,
        list,
        setter: setCurrentId,
      })}
      ${(() => {
        switch (currentId) {
          case "NutrientCalc":
            return cpNutrientCalc();
          default:
            return html``;
        }
      })()}
    </div>
  `;
};