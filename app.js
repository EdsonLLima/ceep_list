import FinishButton from "./components/finishTasks.js";
import DeleteButton from "./components/deleteTasks.js";

const newToDo = document.querySelector("[data-form-button]");
const createTask = (event) => {
  //impende o parão de funcionamento e erefresh do formulário.
  event.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const getValue = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const data = moment(calendar.value); //get value calendar
  console.log(data.format("DD/MM/YYYY"));

  //cria um elemento
  const liTask = document.createElement("li");
  //add classe ao elento criado
  liTask.classList.add("task");

  //Usando template strig para trabalhar html e js juntos
  const content = `<p class="content">${getValue}</p>`;

  liTask.innerHTML = content;

  liTask.appendChild(FinishButton());
  liTask.appendChild(DeleteButton());
  list.appendChild(liTask);
  input.value = "";
};

newToDo.addEventListener("click", createTask);
