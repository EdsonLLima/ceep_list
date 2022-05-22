const deleteTask = (update, id) => {
  const index = id;
  const registeredTasks = JSON.parse(localStorage.getItem("tasks"));

  registeredTasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(registeredTasks));

  update();
};

const DeleteButton = (update, id) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Deletar";
  deleteButton.addEventListener("click", () => deleteTask(update, id));

  return deleteButton;
};

// const deleteTask = (event) => {
//   //pega o alvo(elemento) que sofreu a ação
//   const btnDelete = event.target;
//   const completeTask = btnDelete.parentElement;

//   completeTask.remove();

//   return btnDelete;
// };

export default DeleteButton;
