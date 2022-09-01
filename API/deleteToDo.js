const numToDo = document.getElementById("num");
const allToDo = document.querySelectorAll("li");
const deleteTodo = async (id) => {
  debugger;
  let num = 0;
  for (const e of allToDo) {
    num++
  }
  numToDo.innerText = `You have ${num} pending tasks`;
  try {
    debugger;
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    // CHECK RES
    if (res.status === 200) {
      debugger;
      const data = await res.json();

      return data;
    } else {
      console.log(`Error while deleting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
