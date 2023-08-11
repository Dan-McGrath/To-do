import loadHomepage from "../home/homeDOM";
import loadProjectsPage from "../projects/projectsDOM";


const content = document.querySelector('#content')

const navLogic = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const clearDom = () => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild)
        }
    };

    const navHandler = (e) => {
        if (e.target.id === 'home') {
            clearDom()
            loadHomepage()
        } else if (e.target.id === 'projects') {
            clearDom()
            loadProjectsPage()
        }
    }

    navLinks.forEach(ele => ele.addEventListener('click', navHandler));

};

export default navLogic