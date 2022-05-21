import { Task } from "./createTask.js";

export const createDate = (date) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const topDate = document.createElement("li");
  const content = `<p class="content-data">${date.format("DD/MM/YYYY")} </p>`;

  topDate.innerHTML = content;

  tasks.forEach((task) => {
    topDate.appendChild(Task(task));
  });

  return topDate;
};
