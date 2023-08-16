import { todoForm } from "./todoDOM";
import { projectArr } from "../projects/projectsLogic";
import loadProjectsPage from "../projects/projectsDOM";

const todoObject = {
    name: '',
}

const todoButtonHandler = (e) => {
    const todoBtn = document.querySelectorAll('.todo-btn')
    const projectDiv = e.target.parentNode
    console.log(projectDiv)
    if (e.target.dataset.active === 'true') {
        todoBtn.forEach(ele => ele.dataset.active = 'false')
        const todoForm = document.querySelectorAll('.todo-form');
        todoForm.forEach(ele => ele.remove(ele))

        
    } else {
        console.log(e.target.dataset.index)
        if (projectDiv.dataset.index === e.target.dataset.index){
            e.target.dataset.active = 'true';
            projectDiv.appendChild(todoForm())
            
        }
        
        //todoBtn.forEach(ele => ele.dataset.active = 'true')
        return
        
    }
}

const todoFormSubmit = (e) => {
    e.preventDefault();
    let newTodo = e.target.form[0].value;
    let projectID = Number(e.target.parentNode.dataset.index)
    if (newTodo.value === '') {
        alert('Please fill out info');
    } else {
        
        let newTodoObject = todoObject
        newTodoObject.name = newTodo;
        //push new todo object to the project array
        projectArr[Number(projectID)].toDo.push(newTodoObject);

        //clear form
        const todoFormInput = document.querySelector('#todo')
        todoFormInput.textContent = '';
        todoFormInput.value = '';

        //remove form
        const content = document.querySelector('#content')
        while (content.childNodes.length > 1)  {
            content.removeChild(content.lastChild) 
        }
        
        
        loadProjectsPage()
        
        
    }
    
    
}

export {todoButtonHandler, todoFormSubmit}