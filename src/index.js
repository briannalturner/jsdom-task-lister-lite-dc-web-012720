document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener("submit", formHandler)
});

function formHandler(event) {
  event.preventDefault();
  console.log("default prevented")
  let list = document.getElementById("tasks")
  let newTask = document.createElement('li')
  let input = document.getElementById('new-task-description').value
  console.log(input)
  newTask.innerText = `${input}`
  list.appendChild(newTask)
}