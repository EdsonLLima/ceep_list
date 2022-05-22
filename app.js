import { handleNewItem } from "./components/createTask.js";
import { loadTask } from "./components/loadTask.js";

const newToDo = document.querySelector("[data-form-button]");
newToDo.addEventListener("click", handleNewItem);

loadTask();
