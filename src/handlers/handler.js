import { validateUserInput } from "../logic/validateInput.js";
import { getTodoList } from "../../API/getTodos.js";
import { postTodo } from "../../API/postTodo.js";
import { displayList } from "../components/displayLi.js";

export const addToDoHandler = (userInput) => {
  debugger;
  var userToDo = validateUserInput(userInput);
  if (!userToDo) { return }
  postTodo(userInput)
  }   
getTodoList().then((toDOList) => displayList(toDOList));
