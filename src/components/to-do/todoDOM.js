import { todoFormSubmit } from "./todoLogic";

const createTodo = () => {
    const todoDiv = document.createElement('div');
    const todo = document.createElement('p');

}

const todoForm = () => {
    const projectDiv = document.querySelector('.project')
    const projectID = projectDiv.dataset.index;
    
    const todoFormDiv = document.createElement('div');
    todoFormDiv.dataset.active = 'false';
    todoFormDiv.classList.add('todo-form');
    todoFormDiv.dataset.index = projectID

    projectDiv.appendChild(todoFormDiv)

    const todoForm = document.createElement('form');
    todoForm.setAttribute('action', '#');
    todoForm.setAttribute('class', 'add-todo-form')
    todoForm.setAttribute('id', 'todo-form')

    todoFormDiv.appendChild(todoForm);

    const todoInput = document.createElement('input');
    todoInput.setAttribute('id', 'todo');
    todoInput.setAttribute('name', 'todo')
    todoInput.setAttribute('type', 'text')


    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', 'todo');
    todoLabel.textContent = 'To-Do:'

    const todoSubmit = document.createElement('button');
    todoSubmit.setAttribute('id', 'submit')
    todoSubmit.textContent = 'Submit To-Do'
    todoSubmit.addEventListener('click', todoFormSubmit)

    todoForm.appendChild(todoLabel);
    todoForm.appendChild(todoInput);
    todoForm.appendChild(todoSubmit);
}


export {todoForm}