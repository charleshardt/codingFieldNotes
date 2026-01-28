// Asynchronous JavaScript: Promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("charlie");

// Asynchronous JavaScript: Async/Await
// A cleaner solution
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();
