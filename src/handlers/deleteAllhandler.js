import { displayList } from "../components/displayLi.js";
import { storage, TODO_CLASS } from "../data.js"

const todoList = document.querySelector(TODO_CLASS);

export const deleteAll =  () => {
  storage.array.forEach(element => {
      const id = element.id
    deleteTodo(id).then((toDoList) => {
      storage.array = toDoList;
      displayList(toDoList);
    }); 
  })
}
const deleteTodo = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    // CHECK RES
    if (res.status === 200) {
      return await res.json();

     
    } else {
      console.log(`Error while deleting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
