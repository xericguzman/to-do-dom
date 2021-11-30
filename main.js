let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let todos = document.getElementById("to-dos");

addToDoButton.addEventListener("click", function () {
  const paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild("p");
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
