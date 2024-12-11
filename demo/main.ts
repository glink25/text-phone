import { myTextPhone } from "./phone";

const screenDom = document.querySelector<HTMLDivElement>("#screen")!;
const inputDom = document.querySelector<HTMLInputElement>("#input")!;
const confirmButton = document.querySelector<HTMLButtonElement>("#confirm")!;

myTextPhone.start();

screenDom.innerText = myTextPhone.screenContent;

confirmButton.addEventListener("click", () => {
  const command = inputDom.value;
  const result = myTextPhone.handleInput(command);
  screenDom.innerText = result; // myTextPhone.screenContent;
});
