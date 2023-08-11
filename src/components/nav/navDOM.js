const content = document.querySelector('#content');

const loadNav = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');

    const navList = document.createElement('ul');

    const home = document.createElement('li');
    home.textContent = 'Home';

    const projects = document.createElement('li');
    projects.textContent = 'Projects';

    content.appendChild(header);

    header.appendChild(nav);

    nav.appendChild(navList)

    navList.appendChild(home);
    navList.appendChild(projects)

}

export default loadNav