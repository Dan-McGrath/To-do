import navLogic from "./navLogic";

const content = document.querySelector('#content');

const loadNav = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const navList = document.createElement('ul');

    const home = document.createElement('li');
    home.textContent = 'Home';
    home.setAttribute('id', 'home');
    home.classList.add('nav-link')

    const projects = document.createElement('li');
    projects.textContent = 'Projects';
    projects.setAttribute('id', 'projects');
    projects.classList.add('nav-link')

    content.appendChild(header);

    header.appendChild(nav);

    nav.appendChild(navList)

    navList.appendChild(home);
    navList.appendChild(projects)

    navLogic()
}

export default loadNav