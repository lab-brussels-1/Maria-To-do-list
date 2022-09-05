import { storage } from "../data.js"


export const deleteAll = () => {
  storage.array.forEach(element => {
      const id = element.id

       deleteTodo(id).then((data)=>console.log)
  });
    
}
const deleteTodo = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    // CHECK RES
    if (res.status === 200) {
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
