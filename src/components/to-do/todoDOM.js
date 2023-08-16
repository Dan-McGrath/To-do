import { todoFormSubmit } from "./todoLogic";
import { projectArr } from "../projects/projectsLogic";

const createTodo = () => {
    const todoDiv = document.createElement('div');
    const todo = document.createElement('p');

}

const todoForm = () => {

    const todoFormDiv = document.createElement('div');
    todoFormDiv.dataset.active = 'false';
    todoFormDiv.classList.add('todo-form');
    
    const todoForm = document.createElement('form');
    todoForm.setAttribute('action', '#');
    todoForm.setAttribute('class', 'add-todo-form')
    todoForm.setAttribute('id', 'todo-form')

    todoFormDiv.appendChild(todoForm);

    const todoInput = document.createElement('input');
    todoInput.setAttribute('id', 'todo');
    todoInput.setAttribute('name', 'todo')
    todoInput.setAttribute('type', 'text')
    todoInput.classList.add('todo-input')


    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', 'todo');
    todoLabel.textContent = 'To-Do:'

    const todoSubmit = document.createElement('button');
    todoSubmit.setAttribute('class', 'submit')
    todoSubmit.textContent = 'Submit To-Do'

    todoForm.appendChild(todoLabel);
    todoForm.appendChild(todoInput);
    todoForm.appendChild(todoSubmit);


    
    
    
    return todoFormDiv
    
}


export {todoForm}