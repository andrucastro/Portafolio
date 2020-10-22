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

    // create a new elemnt button and inser an icon
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML='<i class="far fa-check-circle"></i>';
    completedBtn.classList.add("complete-btn");
    divTaks.appendChild(completedBtn);

    //insert the text of input in the item
    newTaks.innerText = input.value;
    newTaks.classList.add('task-item')

    // insert the new task inside a div container
    divTaks.appendChild(newTaks);


    // create a new elemnt button and inser an icon
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    divTaks.appendChild(deleteBtn);

    //insert the new Div Item within the Ul tag with the .todo list"
    todoList.appendChild(divTaks)
}
