import FinishButton from "./finishTasks.js";
import DeleteButton from "./deleteTasks.js";

export const handleNewItem = (event) => {
  //impende o parão de funcionamento e erefresh do formulário.
  event.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const getValue = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = moment(calendar.value); //get value calendar

  const dateFormat = date.format("DD/MM/YYYY");

  //criar um objeto data(dados) para guarda os objetos que vão ser
  //renderizado em tela
  const dataStorage = {
    getValue,
    dateFormat,
  };

  list.appendChild(Task(dataStorage));
  localStorage.setItem("tasks", JSON.stringify(dataStorage));
  input.value = "";
};

export const Task = ({ getValue, dateFormat }) => {
  //cria um elemento
  const liTask = document.createElement("li");
  //add classe ao elento criado
  liTask.classList.add("task");

  //Usando template strig para trabalhar html e js juntos
  const content = `<p class="content">${dateFormat} <br/> ${getValue} </p>`;

  liTask.innerHTML = content;

  liTask.appendChild(FinishButton());
  liTask.appendChild(DeleteButton());

  return liTask;
};
