// @ts-expect-error
const { shell } = window.__TAURI__;

import "./styles.css";

window.addEventListener("DOMContentLoaded", () => {
  const examples = document.getElementsByClassName("example");
  Array.from(examples).forEach((e) => {
    const code = e.querySelector("pre")!.textContent!;
    const button = e.querySelector("button")!;

    button.addEventListener("click", () => {
      console.log(`Executing:`);
      console.log(code);
      eval(code);
    });
  });
});
