const myTry = async () => {
  const response = await fetch(`http://localhost:5000/todos`);
  const data = await response.json();
  console.log(data);
  return data;
};
myTry();
