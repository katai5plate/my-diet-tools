import { html, cp, hooks } from "../../preact.js";
import Input from "../parts/Input.js";

const { useState } = hooks;

/** @type {CP<typeof html, typeof Input>} */
const cpInput = cp(Input);

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
  const calcRate = () => (capacity / per) * alloc;
  const calcSuger = () => (energy - protein * 4 - fat * 9) / 4;
  return html`
    <div class="row">
      ${cpInput({
        id: "capacity",
        name: "測る量",
        suffix: "g",
        setter: setCapacity,
        caption: capacity,
        tabindex: 1,
      })}
      ${cpInput({
        id: "per",
        name: "成分表示の基準量",
        suffix: "g",
        setter: setPer,
        caption: per,
        tabindex: 1,
      })}
      ${cpInput({
        id: "alloc",
        name: "配分率",
        prefix: "x",
        setter: setAlloc,
        caption: alloc,
        initial: defaultAlloc,
        tabindex: 1,
      })}
      <div class="form-text mb-3">レート: ${calcRate()}</div>
      ${cpInput({
        id: "energy",
        name: "エネルギー",
        suffix: "kcal",
        setter: setEnergy,
        caption: energy * calcRate(),
        tabindex: 1,
      })}
      ${cpInput({
        id: "protein",
        name: "タンパク質",
        suffix: "g",
        setter: setProtein,
        caption: protein * calcRate(),
        tabindex: 1,
      })}
      ${cpInput({
        id: "fat",
        name: "脂質",
        suffix: "g",
        setter: setFat,
        caption: fat * calcRate(),
        tabindex: 1,
      })}
      ${cpInput({
        id: "carbo",
        name: "炭水化物",
        suffix: "g",
        setter: setCarbo,
        caption: carbo * calcRate(),
        tabindex: 1,
      })}
      ${cpInput({
        id: "sugar",
        name: "糖質",
        suffix: "g",
        indent: true,
        setter: setSuger,
        caption: (sugar || calcSuger()) * calcRate(),
        tabindex: 2,
      })}
      ${cpInput({
        id: "fiber",
        name: "食物繊維",
        suffix: "g",
        indent: true,
        setter: setFiber,
        caption: (fiber || carbo - calcSuger()) * calcRate(),
        tabindex: 2,
      })}
      ${cpInput({
        id: "salt",
        name: "塩分",
        suffix: "g",
        setter: setSalt,
        caption: salt * calcRate(),
        tabindex: 1,
      })}
    </div>
  `;
};
