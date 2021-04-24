import { html, cp, hooks } from "../../preact.js";
import Input from "../parts/Input.js";
import Table from "../parts/Table.js";

const { useState } = hooks;

/** @type {CP<typeof Input>} */
const cpInput = cp(Input);
/** @type {CP<typeof Table>} */
const cpTable = cp(Table);

export default () => {
  const [capacity, setCapacity] = useState(0);
  const [per, setPer] = useState(0);
  const defaultAlloc = 1;
  const [alloc, setAlloc] = useState(defaultAlloc);
  const [energy, setEnergy] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbo, setCarbo] = useState(0);
  const [sugar, setSuger] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [salt, setSalt] = useState(0);

  const positive = (x) => (x < 0 ? 0 : x);

  const rate = (capacity / per) * alloc;
  const calcSuger = positive((energy - protein * 4 - fat * 9) / 4);
  const calcFiber = positive(carbo - calcSuger);

  const capacities = [
    {
      id: "capacity",
      name: "測る量",
      suffix: "g",
      setter: setCapacity,
      tabindex: 1,
    },
    {
      id: "per",
      name: "成分表示の基準量 (栄養成分表示 ** g 当たり)",
      suffix: "g",
      setter: setPer,
      tabindex: 1,
    },
    {
      id: "alloc",
      name: "配分率",
      prefix: "x",
      setter: setAlloc,
      initial: defaultAlloc,
      tabindex: 1,
    },
  ];
  const nutrients = [
    {
      id: "energy",
      name: "エネルギー",
      suffix: "kcal",
      setter: setEnergy,
      result: energy,
      tabindex: 1,
    },
    {
      id: "protein",
      name: "タンパク質",
      suffix: "g",
      setter: setProtein,
      result: protein,
      tabindex: 1,
    },
    {
      id: "fat",
      name: "脂質",
      suffix: "g",
      setter: setFat,
      result: fat,
      tabindex: 1,
    },
    {
      id: "carbo",
      name: "炭水化物",
      suffix: "g",
      setter: setCarbo,
      result: carbo,
      tabindex: 1,
    },
    {
      id: "sugar",
      name: "糖質",
      suffix: "g",
      indent: true,
      setter: setSuger,
      result: sugar || calcSuger,
      tabindex: 2,
    },
    {
      id: "fiber",
      name: "食物繊維",
      suffix: "g",
      indent: true,
      setter: setFiber,
      result: fiber || calcFiber,
      tabindex: 2,
    },
    {
      id: "salt",
      name: "塩分",
      suffix: "g",
      setter: setSalt,
      result: salt,
      tabindex: 1,
    },
  ];
  return html`
    <div class="row">
      ${capacities.map(cpInput)}
      <div class="form-text mb-3">レート: ${rate}</div>
      ${nutrients.map(({ result, ...rest }) =>
        cpInput({ caption: `結果: ${positive(result) * rate}`, ...rest })
      )}
      ${cpTable({
        labelColumn: true,
        list: [
          ["栄養素", "数"],
          ...nutrients.map(({ name, result, suffix }) => [
            name,
            `${result} ${suffix}`,
          ]),
        ],
      })}
    </div>
  `;
};
