export const getTodoList = async () => {
    debugger;
try {
// fetch the API data
    const response = await fetch(`http://localhost:5000/todos`)
//  throw an error if the response is not ok 
  if (res.status === 201) {
    debugger;
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



