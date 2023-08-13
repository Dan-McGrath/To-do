import { todoForm } from "./todoDOM";

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

export {todoButtonHandler}