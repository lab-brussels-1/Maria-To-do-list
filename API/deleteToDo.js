
const todoList = document.querySelector(".todoList");
const numToDo = document.getElementById("num");

const deleteTodo = async (id, event) => {
  console.log(event.target.parentElement)
    event.target.parentElement.remove();
   await deletion(id)
  }

const deletion = async (id) => {
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
}
