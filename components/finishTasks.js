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

export default FinishButton;
