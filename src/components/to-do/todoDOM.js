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
    // console.log(todoFormDiv.parentNode)
    // todoForm.dataset.index = todoFormDiv.parentNode.dataset.index

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


    // for (let i = 0; i < projectArr.length; i++) {
    //     const projectsDiv = document.querySelector('.project-' + i)
    //     const projectID = projectsDiv.dataset.index;
    //     const todoFormDiv = document.createElement('div');
    //     todoFormDiv.dataset.active = 'false';
    //     todoFormDiv.classList.add('todo-form');
    //     todoFormDiv.dataset.index = projectID;
    

    //     projectsDiv.appendChild(todoFormDiv)

    //     const todoForm = document.createElement('form');
    //     todoForm.setAttribute('action', '#');
    //     todoForm.setAttribute('class', 'add-todo-form')
    //     todoForm.setAttribute('id', 'todo-form')
    //     todoForm.dataset.index = i

    //     todoFormDiv.appendChild(todoForm);

    //     const todoInput = document.createElement('input');
    //     todoInput.setAttribute('id', 'todo');
    //     todoInput.setAttribute('name', 'todo')
    //     todoInput.setAttribute('type', 'text')


    //     const todoLabel = document.createElement('label');
    //     todoLabel.setAttribute('for', 'todo');
    //     todoLabel.textContent = 'To-Do:'

    //     const todoSubmit = document.createElement('button');
    //     todoSubmit.setAttribute('id', 'submit')
    //     todoSubmit.textContent = 'Submit To-Do'
    //     todoSubmit.addEventListener('click', todoFormSubmit)

    //     todoForm.appendChild(todoLabel);
    //     todoForm.appendChild(todoInput);
    //     todoForm.appendChild(todoSubmit);

    //  }
    
    
    return todoFormDiv
    
}


export {todoForm}