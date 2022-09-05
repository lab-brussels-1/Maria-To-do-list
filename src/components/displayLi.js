import { TODO_CLASS } from "../data.js";
const todoList = document.querySelector(TODO_CLASS);
const numToDo = document.getElementById("num");
export const displayList = (list) => {
  var toDocount = Object.keys(list).length;
  let newLitag = "";
  if (toDocount !== 0) {
    list.forEach((element) => {
      newLitag =
        `<li> ${element.title}<span onclick="deleteTodo(${element.id})"; > - </span></li>` +
        newLitag;
    });
  }
  numToDo.innerHTML = `You have ${toDocount} pending tasks`;
  todoList.innerHTML = newLitag;
};
