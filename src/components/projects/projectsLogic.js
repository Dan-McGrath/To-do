
const createProjectObject = () => {

    const submit = document.querySelector('#submit');

    submit.addEventListener('click', e => {
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
            projectsArr.push(project)
            createProjectButton.dataset.active = 'false'
            content.removeChild(content.lastChild)
        }

        
        console.log(projectsArr)
        
    })

    const project = {
        title: title,
        description: description,
        toDo: []
    }

    const projectsArr = [];
}

export default createProjectObject