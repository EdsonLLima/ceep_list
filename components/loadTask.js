import { createDate } from "./createDate.js";
// import { Task } from "./createTask.js";

export const loadTask = () => {
  const list = document.querySelector("[data-list]");

  const registeredTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  list.innerHTML = " ";

  registeredTasks.forEach((task) => {
    const day = moment(task.dateFormat, "DD/MM/YYYY");
    list.appendChild(createDate(day));
  });
};
