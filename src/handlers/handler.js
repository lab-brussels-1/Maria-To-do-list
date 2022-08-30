import { postTodo } from "../../API/postTodo.js";
import { validateUserInput } from "../logic/validateInput.js";


export const addToDoHandler = (text) => {
  debugger;
  var userToDo = validateUserInput(text);
  if (userToDo) postTodo(text)
};

// async () => {
//   const response = await fetch(`http://localhost:5000/todos`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };
// myTry();
