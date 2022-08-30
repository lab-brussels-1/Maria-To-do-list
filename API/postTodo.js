export const postTodo = async (toDo) => {
    debugger;
  try {
    const res = await fetch(`http://localhost:5000/todos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: `${toDo}`, completed: false }),
    });

    // CHECK RES
    if (res.status === 201) {
      const data = await res.json();

      return data
    } else {
      console.log(`Error while posting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
