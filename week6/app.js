// Selectors 
const input = document.querySelector(".input_task_field");
const todobutton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");

//Event listeners 

todobutton.addEventListener("click", addTodo);

//funtions 

function addTodo(event){

    // prevent submint the form 
    event.preventDefault();

    //create a new div container for every task 
    const divTaks = document.createElement('div');
    divTaks.classList.add("todo")

    // create a task 
    const newTaks = document.createElement('li');

    newTaks.innerText = "test";
    newTaks.classList.add('task-item')

    // insert the new task inside a div container
    divTaks.appendChild(newTaks);

    // create a new elemnt button and inser an icon
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML='<i class="far fa-check-circle"></i>';
    completedBtn.classList.add("complete-btn");
    divTaks.appendChild(completedBtn);

    // create a new elemnt button and inser an icon
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add("complete-btn");
    divTaks.appendChild(deleteBtn);

    //insert the new Div Item within the Ul tag with the .todo list"
    todoList.appendChild(divTaks)
}
