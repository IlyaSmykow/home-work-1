let button = document.getElementById('button');
let ul = document.getElementById('list_wrapper');
let tasks = [];

const createLiElement = (elem, index) => {
    return `<li class="li">${elem}<button class="delete_btn" onClick="handleClickRemove(${index})">x</button></li>`;
};

const render = () => {
    ul.innerHTML = '';

    if(tasks.length > 0) {
        tasks.forEach((task, index) => {
            ul.innerHTML += createLiElement(task, index);
        });
    }
};

document.addEventListener("DOMContentLoaded", render());

const handleClickAdd = value => {
    tasks.push(value);
    render();
};

const handleClickRemove = index => {
    tasks.splice(index, 1);
    render();
};

button.addEventListener('click', (e) => {
    let inputValue = document.getElementById('input').value;
    if(inputValue === '') return;
    handleClickAdd(inputValue);
    inputValue = '';
    render();
});