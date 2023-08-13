import { submitHandler, projectArr } from "./projectsLogic";

const content = document.querySelector('#content');
const loadProjectsPage = () => {
    

    const subtitle = document.createElement('h1');
    subtitle.textContent = 'Projects';
    content.appendChild(subtitle);


    if(projectArr.length > 0) {
        content.appendChild(project())
    }

    content.appendChild(createProject());

    

}

const project = () => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    

    // create logic to loop through available projects and display them
    for (let i = 0; i < projectArr.length; i++) {
        const projectTitle = projectArr[i].title;
        const projectDescription = projectArr[i].description;

        const title = document.createElement('h3');
        const description = document.createElement('p');

        title.textContent = projectTitle;
        description.textContent = projectDescription

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
    }
    return projectDiv
}


const createProject = () => {
    const createProject = document.createElement('button');
    createProject.textContent = 'Create Project'
    createProject.dataset.active = 'false';
    createProject.classList.add('create-project');

    

    createProject.addEventListener('click', e => {
        if (e.target.dataset.active === 'false') {
            e.target.dataset.active = 'true'
            createProjectForm()

        } else {
            e.target.dataset.active = 'false'
            content.removeChild(content.lastChild)
        }
        
    })

    return createProject
}


const createProjectForm = () => {
    // div and form elements
    const projectFormDiv = document.createElement('div');
    const projectForm = document.createElement('form');

    projectFormDiv.classList.add('project-form');
    projectFormDiv.dataset.active = 'false';

    projectForm.setAttribute('action', '#');
    projectForm.classList.add('add-project-form');
    projectForm.setAttribute('id', 'project-form')

    content.appendChild(projectFormDiv)
    projectFormDiv.appendChild(projectForm);

    // input/lable for title of project
    const projectTitleInput = document.createElement('input');
    const projectTitleLabel = document.createElement('label');

    projectTitleInput.setAttribute('id', 'title');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('name', 'title');

    projectTitleLabel.setAttribute('for', 'title');
    projectTitleLabel.textContent = 'Project Name:'

    projectForm.appendChild(projectTitleLabel);
    projectForm.appendChild(projectTitleInput);

    // description of project
    const projectDescriptionInput = document.createElement('textarea');
    const projectDescriptionlabel = document.createElement('label');

    projectDescriptionInput.setAttribute('id', 'description');
    projectDescriptionInput.setAttribute('rows', '4');
    projectDescriptionInput.setAttribute('col', '50');
    projectDescriptionInput.setAttribute('name', 'description');

    projectDescriptionlabel.setAttribute('for', 'description');
    projectDescriptionlabel.textContent = 'Project Description:'

    projectForm.appendChild(projectDescriptionlabel);
    projectForm.appendChild(projectDescriptionInput);
    //add to-do for specific project


    //submit button
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.setAttribute('id', 'submit')
    projectForm.appendChild(submit);
    submit.addEventListener('click', submitHandler)
    

    return projectFormDiv
}

export default loadProjectsPage