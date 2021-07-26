// const myButton = document.querySelector('.my-button');
// // const aboutSection = document.getElementById('about');
// // const buttonsInAboutSection = document.querySelectorAll('#about button');

// myButton.addEventListener('click', (event) => {
//     console.log('from an anonymous arrow function');

//     event.stopPropagation();
// });

// document.body.addEventListener('click', (event) => {
//     console.log('body was clicked');
// })

// document.addEventListener('click', () => {
//     console.log('html clicked');
// })

// myButton.addEventListener('click', function () {
//     console.log('from an anonymous function');
// });

// myButton.addEventListener('click', clickHandler);

// function clickHandler() {
//     console.log('clicked from click handler function')
// }

// // myButton.onclick = function () {
// //     console.log('onclick worked 1');
// // }

// myButton.onclick = function () {
//     console.log('onclick worked second time');
// }

// const user = {
//     firstname: 'Baycan'
// }

// myButton.onmouseover = function () {
//     console.log('button hovered');
// }

// myButton.onmouseout = function () {
//     console.log('mouse moved out from button');
// }

// myButton.onclick = function (e) {

// }

// myButton.addEventListener('click', (e) => {
//     console.log(e);
// });


// const formElement = document.getElementById('custom-form');

// formElement.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log('form submitted');
// });

// document.addEventListener('keydown', (e) => {
//     if (e.code === 'Enter') {
//         alert('Hey user, you pressed enter key');
//     }
// });

// const searchInput = document.querySelector('#search-input');
// searchInput.addEventListener('keydown', (event) => {
//     event.stopPropagation();
//     if (event.code === 'Enter') {
//         console.log(event.target.value);
//     }
// })


const addTodoButton = document.querySelector('.add-todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

addTodoButton.onclick = function () {
    if (!todoInput.value) {
        alert('Please enter a todo name');
    } else {
        listItemMaker(todoInput.value);
        todoInput.value = '';
    }
}

todoInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        if (!todoInput.value) {
            alert('Please enter a todo name');
        } else {
            listItemMaker(todoInput.value);
        }
    }
})

function listItemMaker(todoName) {
    const listItem = document.createElement('li');
    listItem.innerText = todoName;
    listItem.className = 'list-group-item';
    todoList.prepend(listItem);
}