const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo);

function addTodo(e)
{
    e.preventDefault();
    // document.write(e)
}


const todoDiv = document.createElement('div');

todoDiv.classList.add('todo');
const newTodo = `
<li>task 1 </li>
<span><i class='far fa-check'></i></span>
<span><i class='far fa-alt'></i></span>
`
todoDiv.innerHTML = newTodo;

todoList.appendChild(todoDiv);
todoInput.value = "";

