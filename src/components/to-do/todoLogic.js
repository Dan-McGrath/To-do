import { todoForm } from "./todoDOM";
import { projectArr } from "../projects/projectsLogic";
import loadProjectsPage from "../projects/projectsDOM";



const todoButtonHandler = (e) => {
    const todoBtn = document.querySelectorAll('.todo-btn')
    const projectDiv = e.target.parentNode
    if (e.target.dataset.active === 'true') {
        todoBtn.forEach(ele => ele.dataset.active = 'false')
        const todoFormEle = document.querySelectorAll('.todo-form');
        todoFormEle.forEach(ele => ele.remove(ele))

        
    } else {
        if (projectDiv.dataset.index === e.target.dataset.index){
            e.target.dataset.active = 'true';
            projectDiv.appendChild(todoForm())
            const todoFormID = projectDiv.dataset.index
            const todoFormEle = document.querySelector('.add-todo-form')
            todoFormEle.dataset.index = todoFormID
            const formSubmit = document.querySelectorAll('.submit')
            formSubmit.forEach(ele => ele.addEventListener('click', todoFormSubmit))
        }
        
        return
        
    }
}

const todoFormSubmit = (e) => {
    e.preventDefault();
    const todoObject = {
    name: '',
    }
    
    let newTodo = e.target.form[0].value;
    let projectID = e.target.parentNode.dataset.index
    if (newTodo === '') {
        alert('Please fill out info');
    } else {
        if (e.target.parentNode.dataset.index === projectID) {
            todoObject.name = newTodo
            //push new todo object to the project array
            projectArr[Number(projectID)].toDo.push(todoObject);

            //clear form
            const todoFormInput = document.querySelectorAll('.todo')
            todoFormInput.forEach(ele => {
                ele.textContent = '';
                ele.value = '';
            })

            //remove form
            const content = document.querySelector('#content')
            while (content.childNodes.length > 1)  {
                content.removeChild(content.lastChild) 
            }
        
        
        
        
        loadProjectsPage()
        }
        
    }
        
    
    
}

export {todoButtonHandler, todoFormSubmit}