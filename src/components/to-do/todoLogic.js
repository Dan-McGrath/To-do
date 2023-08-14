import { todoForm } from "./todoDOM";
import { projectArr } from "../projects/projectsLogic";

const todoObject = {
    name: '',
    priority: false
}

const todoButtonHandler = (e) => {
    const projectDiv = document.querySelector('.project')
    if (e.target.dataset.active === 'true') {
        e.target.dataset.active = 'false';  
        projectDiv.removeChild(projectDiv.lastChild)
        
    } else {
        e.target.dataset.active = 'true'
        todoForm()
    }
}

const todoFormSubmit = (e) => {
    e.preventDefault();
    let newTodo = document.querySelector('#todo');
    let projectID = document.querySelector('.todo-form').dataset.index;
    todoObject.name = newTodo.value;
    //push new todo object to the project array
    projectArr[Number(projectID)].toDo.push(todoObject);

    //clear form
    const todoFormInput = document.querySelector('#todo')
    todoFormInput.textContent = '';
    todoFormInput.value = '';

    //remove form
    const project = document.querySelector('.project');
    const todoButton = document.querySelector('.todo-btn');
    todoButton.dataset.active = 'false'
    project.removeChild(project.lastChild)
}

export {todoButtonHandler, todoFormSubmit}