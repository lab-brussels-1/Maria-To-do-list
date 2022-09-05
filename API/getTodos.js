
export const getTodoList = async () => {
  try {
    // fetch the API data
    const res = await fetch(`https://my-json-server.typicode.com/MMikhailova/Maria-To-do-list/todos`);
    //  throw an error if the response is not ok
    if (res.status === 200) {
      return await res.json();
    } else {
      console.log(`Error while posting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
