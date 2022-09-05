import { TODO_CLASS } from "../data.js";
const todoList = document.querySelector(TODO_CLASS);
const numToDo = document.getElementById("num");
export const displayList = (list) => {
  var toDocount= Object.keys(list).length;
  numToDo.innerHTML = `You have ${toDocount} pending tasks`;
  let newLitag = "";
  list.forEach((element) => {
    newLitag =
      `<li> ${element.title}<span onclick="deleteTodo(${element.id})"; > - </span></li>` +
      newLitag;
  });
  todoList.innerHTML = newLitag;
};
