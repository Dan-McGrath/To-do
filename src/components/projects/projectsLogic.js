import loadProjectsPage from "./projectsDOM";

const projectArr = [];

const submitHandler = (e) => {
    const project = {
        title: '',
        description: '',
        toDo: []
    }

    e.preventDefault();
    let newTitle = document.querySelector('#name');
    let newDescription = document.querySelector('#description');
    let content = document.querySelector('#content');
    let createProjectButton = document.querySelector('.create-project')

    if (newTitle.value === '' || newDescription.value === '') {
        alert('Please fill out missing info');
    } else {
        project.title = newTitle.value;
        project.description = newDescription.value;
        projectArr.push(project);
        content.removeChild(content.lastChild)
        newTitle.value = '';
        newTitle.textContent = '';
        newDescription.value = '';
        newDescription.textContent = '';
        createProjectButton.dataset.active = 'false'
        
        
        
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild)
        }

        loadProjectsPage()
        
    }

}

export  {submitHandler, projectArr}