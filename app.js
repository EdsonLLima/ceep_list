import { handleNewItem } from "./components/createTask.js";

const newToDo = document.querySelector("[data-form-button]");
newToDo.addEventListener("click", handleNewItem);
