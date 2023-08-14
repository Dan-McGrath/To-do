import { submitHandler, projectArr } from "./projectsLogic";
import { todoButtonHandler } from "../to-do/todoLogic";

const content = document.querySelector('#content');
const loadProjectsPage = () => {
    

    const subtitle = document.createElement('h1');
    subtitle.textContent = 'Projects';
    content.appendChild(subtitle);
    
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects');
    content.appendChild(projectsDiv);

    if(projectArr.length > 0) {
        for (let i = 0; i < projectArr.length; i++){
            
            projectsDiv.appendChild(project(i))
        }
        
    }

    content.appendChild(createProject());

    const todoBtn = document.querySelectorAll('.todo-btn');
    console.log(todoBtn)
    todoBtn.forEach(e => e.addEventListener('click', todoButtonHandler))

}

const project = (i) => {
    
    const indivProjectDiv = document.createElement('div');
    

    // create logic to loop through available projects and display them
    
        indivProjectDiv.classList.add('project-' + i);

        indivProjectDiv.dataset.index = i;

        const projectTitle = projectArr[i].title;
        const projectDescription = projectArr[i].description;

        const title = document.createElement('h3');
        const description = document.createElement('p');

        title.textContent = projectTitle;
        description.textContent = projectDescription;

        

        const todoButton = document.createElement('button');
        todoButton.textContent = 'Add To-Do';
        todoButton.dataset.index = i;
        todoButton.dataset.active = 'false';
        todoButton.classList.add('todo-btn')

        

        indivProjectDiv.appendChild(title);
        indivProjectDiv.appendChild(description);
        
        for(let j = 0; j < projectArr[i].toDo.length; j++) {
            const todoDiv = document.createElement('div')
            const todoName = projectArr[i].toDo[j].name;
            const todoPriority = projectArr[i].toDo[j].priority;
            const todoNameDom = document.createElement('p');
            const todoPriorityDom = document.createElement('div');

            todoNameDom.textContent = todoName;
            todoPriorityDom.textContent = todoPriority

            indivProjectDiv.appendChild(todoDiv);
            todoDiv.appendChild(todoNameDom)
            todoDiv.appendChild(todoPriorityDom)

        }
        
        indivProjectDiv.appendChild(todoButton);
        
        //todoButton.addEventListener('click', todoButtonHandler)


    return indivProjectDiv
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

    projectTitleInput.setAttribute('id', 'name');
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