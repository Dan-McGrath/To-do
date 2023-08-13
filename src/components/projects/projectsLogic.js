import loadProjectsPage from "./projectsDOM";

const projectArr = [];

const submitHandler = (e) => {
    const project = {
        title: '',
        description: '',
        toDo: []
    }

    e.preventDefault();
    let newTitle = document.querySelector('#title');
    let newDescription = document.querySelector('#description');
    let content = document.querySelector('#content');
    let createProjectButton = document.querySelector('.create-project')

    if (newTitle === '' || newDescription === '') {
        alert('Please fill out missing info')
    } else {
        project.title = newTitle.value
        project.description = newDescription.value
        newTitle.value = '';
        newTitle.textContent = '';
        newDescription.value = '';
        newDescription.textContent = '';
        createProjectButton.dataset.active = 'false'
        content.removeChild(content.lastChild)
        projectArr.push(project)
        
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild)
        }

        loadProjectsPage()
        
    }

}

export  {submitHandler, projectArr}