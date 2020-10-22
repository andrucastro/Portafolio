// Selectors 
const input = document.querySelector(".input_task_field");
const todobutton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_button");

//Event listeners 

todobutton.addEventListener("click", addTodo);

//funtions 

function addTodo(event){

    event.preventDefault();

    const divTaks = document.createElement('div');
    divTaks.classList.add("todo")

    const newTaks = document.createElement('li');
    newTaks.innerText = "test";
    newTaks.classList.add('task-item')

    divTaks.appendChild(newTaks);

}