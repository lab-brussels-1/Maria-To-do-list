import "./listeners/addToDo.js";


// const deleteTodo = async() => {
//   try {
//       const res = await fetch(`http://localhost:5000/todos`, {
//         method: "DELETE",
//       });

//     // CHECK RES
//     if (res.status === 200) {
//       const data = await res.json(); // Sometimes there is no return data depends on the API

//       return data;
//     } else {
//       console.log(`Error while deleting todo with status : ${res.status}`);
//       return false;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// deleteTodo()

// const toDoList = document.querySelector(".todoList");
// const check = async () => {
//   debugger;
//   const response = await fetch("http://localhost:5000/todos/")
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         return false;
//       }
//     })
//     .catch((err) => console.error(err))
//     .then((user) => console.log(user));
// };

// check();