const deleteTodo = async (id) => {
  debugger;
  try {
      const res = await fetch(
        `https://my-json-server.typicode.com/lab-brussels-1/Maria-To-do-list/todos/${id}`,
        {
          method: "DELETE",
        }
      );

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
