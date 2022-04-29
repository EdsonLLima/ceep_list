const input = document.querySelector("[data-form-input]");
const newToDo = document.querySelector("[data-form-button]");

const createTask = (event) => {
  event.preventDefault(); //imprende o refresh do formulário.

  const getValue = input.value;
  console.log(getValue);
  input.value = "";
};

newToDo.addEventListener("click", createTask);
