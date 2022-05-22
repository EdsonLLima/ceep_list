import { removeDatesRepeat, sortDates } from "../service/date.js";
import { createDate } from "./createDate.js";
// import { Task } from "./createTask.js";

export const loadTask = () => {
  const list = document.querySelector("[data-list]");

  const registeredTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  list.innerHTML = " ";
  const uniqueDates = removeDatesRepeat(registeredTasks);

  sortDates(uniqueDates);
  uniqueDates.forEach((day) => {
    list.appendChild(createDate(day));
  });
};
