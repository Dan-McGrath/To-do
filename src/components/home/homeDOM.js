const content = document.querySelector('#content');
const loadHomepage = () => {
    
    const title = document.createElement('h1');
    title.textContent = 'Just Do It!';

    content.appendChild(title);

}

export default loadHomepage