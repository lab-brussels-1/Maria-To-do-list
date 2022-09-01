import { TODO_CLASS } from "../data.js";


const todoList = document.querySelector(TODO_CLASS);
export const displayList = (list) => {
  debugger;
  let newLitag = "";
  list.forEach((element) => {
    newLitag =
      `<li> ${element.title}<span onclick="deleteTodo(${element.id})"; ><i>delete</i></span></li>` +
      newLitag;
  });
  todoList.innerHTML = newLitag;
};
