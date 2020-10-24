// Selectors 
const input = document.querySelector(".input_task_field");
const todobutton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter")


//Event listeners 
document.addEventListener('DOMContentLoaded', getTask)
todobutton.addEventListener("click", addTodo);
todoList.addEventListener ("click", delete_chek);
filterOption.addEventListener("click", filter_task)


/* FUNCTIONS */ 

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
 
     saveLocal(input.value);



    // create a new elemnt button and inser an icon
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    divTaks.appendChild(deleteBtn);

    //insert the new Div Item within the Ul tag with the .todo list"
    todoList.appendChild(divTaks)
    input.value ="";
    
     
}

// Delete and check task

function delete_chek(e){
    const item = e.target;

     //DELTE iTEM   
    if(item.classList[0] ==='delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('no_complete')
        remove_deleted_task_from_localStorage(todo);
        todo.remove()
    }

    //CHECK ITEM
    if(item.classList[0] ==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
} 

// Filter the task bay category
function  filter_task(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display ="flex";  
                break;
            case"completed":
                if(todo.classList.contains('completed')){
                    todo.style.display ='flex';
                 }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display ='flex';
                 }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}


// Read the taks storaged in Local Storage 

function saveLocal(todo){

    let storedTasks;

    if(localStorage.getItem('storedTasks') === null ){
        storedTasks= [];
    }
    else{
        storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
    }
    storedTasks.push(todo);
    localStorage.setItem('storedTasks', JSON.stringify(storedTasks))
}

function getTask(){
    let storedTasks;

    if(localStorage.getItem('storedTasks') === null ){
        storedTasks= [];
    }
    else{
        storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
    }

    // insert the task from the local storage
    storedTasks.forEach(function(todo){

        
    const divTaks = document.createElement('div');
    divTaks.classList.add("todo")

  
    const newTaks = document.createElement('li');
   
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML='<i class="far fa-check-circle"></i>';
    completedBtn.classList.add("complete-btn");
    divTaks.appendChild(completedBtn);
        
    //INSERT THE TEXT
    newTaks.innerText = todo;
    newTaks.classList.add('task-item')
    divTaks.appendChild(newTaks);


    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    divTaks.appendChild(deleteBtn);

    todoList.appendChild(divTaks)
    })
}

// Delete tasks deleted and stored in the local storage
function remove_deleted_task_from_localStorage(todo){
   
    let storedTask;
    if(localStorage.getItem('storedTasks') === null ){
        storedTasks= [];
    }
    else{
        storedTasks = JSON.parse(localStorage.getItem('storedTasks'));
    }
    const todoIndex = todo.children[0].innerText;
    storedTasks.splice(storedTasks.indexOf( todoIndex), 1);
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
}
