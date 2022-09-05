
const todoList = document.querySelector(".todoList");
const numToDo = document.getElementById("num");

const deleteTodo = async (id, event) => {
  debugger;
  const toDoCount = todoList.children.length - 1;
  numToDo.innerHTML = `You have ${toDoCount} pending tasks`;
  event.target.parentElement.remove();
  await deletion(id)
  }

const deletion = async (id) => {
  try {
    const res = await fetch(`https://my-json-server.typicode.com/MMikhailova/Maria-To-do-list/todos/${id}`, {
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
}
