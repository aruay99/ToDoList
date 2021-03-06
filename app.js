//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//Functions

function addTodo(event){
  //Prevent from form submitting
  event.preventDefault();

  //Created todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  //create LI

  const newTodo = document.createElement('li');
  newTodo.innerText= todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML='<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML='<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list 

  todoList.appendChild(todoDiv);

  //clear Todo Input value
  todoInput.value ="";


}

function deleteCheck(e){
  const item = e.target;
  //Delete todo 
  if (item.classList[0] ==='trash-btn'){
    const todo = item.parentNode;

  //Animation
    todo.classList.add("fall");
    //waits until the transition ends and then removes it
    todo.addEventListener('transitionend', function(){
      todo.remove();

    });
    

  }

  //Check mark 
  if(item.classList[0] ==='complete-btn'){
    const todo = item.parentNode;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = "flex";

        }
        else{
          todo.style.display = "none";
        }
        break;

        case "uncompleted":
          if(!todo.classList.contains("completed")){
            todo.style.display = "flex";
        
          }

          else{
            todo.style.display="none";
          }
          break;
    }
  });

}

function saveLocalTodos(todo){
  //check -- hey do I already have things in there?
  let todos;
  if(localStorage.getItem('todos')===null){
    todos = [];
  }
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
    
  }
}