
const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.input-group');

button.addEventListener('click', addtodo)

function addtodo(event) {
    event.preventDefault();

    // this creates divs as user inputs 
    const listDiv = document.createElement('div');
    listDiv.classList.add('lists');

    const addList = document.createElement('li');
    addList.classList.add('addList');


}