const newToDo = document.querySelector("[data-form-button]");

const createTask = (event) => {
  //imprende o refresh do formulário.
  event.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const getValue = input.value;

  //cria um elemento
  const task = document.createElement("li");
  //add classe ao elento criado
  task.classList.add("task");

  //Usando template strig para trabalhar html e js juntos
  const content = `<p class="content">${getValue}</p>`;

  task.innerHTML = content;

  list.appendChild(task);
  input.value = "";
};

newToDo.addEventListener("click", createTask);
