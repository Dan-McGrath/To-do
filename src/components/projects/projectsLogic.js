
const createProjectObject = () => {

    const submit = document.querySelector('#submit');

    submit.addEventListener('click', e => {
        e.preventDefault();
        project.title = document.querySelector('#title').value
        project.description = document.querySelector('#description').value
        projectsArr.push(project)
        console.log(projectsArr)
        
    })

    const project = {
        title: title,
        description: description
    }

    const projectsArr = [];
}

export default createProjectObject