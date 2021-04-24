import { html, cp, hooks } from "./preact.js";
import NutrientCalc from "./components/pages/NutrientCalc.js";
import Nav from "./components/parts/Nav.js";

const { useState } = hooks;

/** @type {CP<typeof NutrientCalc>} */
const cpNutrientCalc = cp(NutrientCalc);
/** @type {CP<typeof Nav>} */
const cpNav = cp(Nav);

export default () => {
  const list = [
    { id: "NutrientCalc", name: "栄養素計算機" },
    //
  ];
  const [currentId, setCurrentId] = useState(list[0].id);
  return html`
    <div class="container" style="margin-bottom: 321px">
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
