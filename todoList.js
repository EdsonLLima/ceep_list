(() => {
  const newToDo = document.querySelector("[data-form-button]");
  const createTask = (event) => {
    //imprende o refresh do formulário.
    event.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const getValue = input.value;

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

  const FinishButton = () => {
    const btnFinish = document.createElement("button");

    btnFinish.classList.add("check-button");
    //add texto no botão
    btnFinish.innerText = "Concluir";
    btnFinish.addEventListener("click", finishTask);

    return btnFinish;
  };

  const finishTask = (event) => {
    //pega o alvo(elemento) que sofreu a ação
    const btnFinish = event.target;
    //basca elemento pai
    const completeTask = btnFinish.parentElement;
    //toggle trabalha com boleano true and false no click
    completeTask.classList.toggle("done");
  };

  const DeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Deletar";
    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
  };

  const deleteTask = (event) => {
    //pega o alvo(elemento) que sofreu a ação
    const btnDelete = event.target;
    const completeTask = btnDelete.parentElement;

    completeTask.remove();

    return btnDelete;
  };
})();
