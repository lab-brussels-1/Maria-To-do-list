import { getTodoList } from "../../API/getTodos.js";
import { postTodo } from "../../API/postTodo.js";
import { validateUserInput } from "../logic/validateInput.js";

export const addToDoHandler = (userInput) => {
  debugger;
  var userToDo = validateUserInput(userInput);
  if (!userToDo) {
    return;
  } else {
    postTodo(userInput)
      .then((newToDo) => console.log(newToDo))
      .catch((err) => console.error(err));

    getTodoList()
      .then((toDoList) => console.log(toDoList))
      .catch((err) => console.error(err));
  }
};
