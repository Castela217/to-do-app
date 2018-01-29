function onReady(){
  let toDos = [];

const addToDoForm = document.getElementById("addToDoForm");

const newToDoText = document.getElementById("newToDoText");

const toDoList = document.getElementById("toDoList");

  function createNewToDo() {
    if (!newToDoText.value) {return; }

      toDos.push({
        title: newToDoText.value,
        complete: false
      });
      newToDoText.value = "";

      renderTheUI();
  }

  function renderTheUI() {
  const toDoList = document.getElementById("toDoList");
  toDoList.textContent = "";

  toDos.forEach(function(toDo) {
    const newToDo = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("span");
    title.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
  });
}

addToDoForm.addEventListener("submit", event => {
  event.preventDefault();
  createNewToDo();
  newToDoText.value = "";

  let title = newToDoText.value;

  let newLi = document.createElement("li");

  let checkbox = document.createElement("input");

  let button = document.createElement("button");

  button.textContent = "Delete";

  button.addEventListener("click", event => {
   event.preventDefault();
   toDoList.removeChild(newLi);
 });

  checkbox.type = "checkbox";

  newLi.textContent = title;

  newLi.appendChild(checkbox);
  newLi.appendChild(button);
  toDoList.appendChild(newLi);

  newToDoText.value = "";


  });
  renderTheUI();
}

window.onload = function() {
 onReady();
};
