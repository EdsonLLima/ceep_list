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

export default DeleteButton;
