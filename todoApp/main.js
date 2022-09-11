
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
    addList.innerText = input.value;
    addList.classList.add('add-list');
    listDiv.appendChild(addList);

    const buttonAdd = document.createElement('button');
    buttonAdd.innerText = 'Done';
    buttonAdd.classList.add('add-btn');
    listDiv.appendChild(buttonAdd);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'remove';
    buttonRemove.classList.add('remove-btn');
    listDiv.appendChild(buttonRemove);

    list.appendChild(listDiv);

}