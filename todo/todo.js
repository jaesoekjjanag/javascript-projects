const show = document.querySelector('#show');
const askName = document.querySelector('.ask-name');
const nameForm = document.querySelector('.name-form');
const nameInput = document.querySelector('.name-input');
const time = document.querySelector('#time');
let todayInput = document.querySelector('.todayForm input');
let todayForm = document.querySelector('.todayForm')
const today = document.querySelector('.today');
const good = document.querySelector('#good');
const todoBtn = document.querySelector('#todo-btn');
const todoText = document.querySelector('.text');
const todoSquare = document.querySelector('.todo-lists-square');
const todoListForm = document.querySelector('.todo-list-form');
const todoListInput = todoListForm.querySelector('input');
const signOut = document.querySelector('.fa-sign-out-alt');
let nameStorage = '';
let todayFocus = localStorage.getItem('todayFocus');
let myName = '';
let doTemp = '';
let listInput = '';
let listInputItems = [];

let parsedListItems = JSON.parse(localStorage.getItem('todoItems'));

if (parsedListItems) {
  listInputItems = parsedListItems;
  for (i of listInputItems) {
    let newList = document.createElement('li');
    document.querySelector('.todo-lists').appendChild(newList);
    let checkBtn = document.createElement('input');
    checkBtn.setAttribute('type', 'checkbox');
    let delBtn = document.createElement('btn');
    delBtn.innerText = '✖';
    delBtn.addEventListener('click', e => e.target.parentNode.remove())
    newList.append(checkBtn, i, delBtn);
  }
}


const timer = () => {
  const now = new Date();
  const hour = String(now.getHours() > 12 ? now.getHours() - 12 : now.getHours());
  //.padStart(2, '0')
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  time.innerHTML = `${hour}:${minute}:${second}`;
  setTimeout(timer, 1000)
}
timer();

const handleShow = () => {
  document.querySelector('.hidden-wrapper').style.display = 'block';
}


const handdleNameSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('myName', myName);
  good.innerHTML += localStorage.getItem('myName');
  handleShow();
  askName.style.display = 'none'
}

const handleNameInput = (e) => {
  myName = e.target.value;
}

const userName = localStorage.getItem('myName')


const inputToday = (e) => {
  localStorage.setItem('todayFocus', e.target.value);
  todayFocus = localStorage.getItem('todayFocus')
}

todayFocus = localStorage.getItem('todayFocus')

//여기
function submitFocus(e) {
  e.preventDefault();
  todoConfirm();
}

function deleteToday(e) {
  today.innerHTML = 'What is your main focus for today? <form class="todayForm"><input></input></form>'
  localStorage.removeItem('todayFocus')
  let todayInput = document.querySelector('.todayForm input');
  let todayForm = document.querySelector('.todayForm')
  todayInput.addEventListener('input', inputToday);
  todayForm.addEventListener('submit', submitFocus);
}

if (new Date().getHours() <= 5) {
  good.innerText = `Good Night, `
} else if (new Date().getHours() <= 11) {
  good.innerText = `Good Morning, `
} else if (new Date().getHours() <= 18) {
  good.innerText = `Good Afternoon, `
} else if (new Date().getHours() <= 24) {
  good.innerText = `Good Evening, `
}

if (userName) {
  askName.style.display = 'none';
  document.querySelector('.hidden-wrapper').style.display = 'block'
  good.innerHTML += localStorage.getItem('myName');
}


function todoConfirm() {
  today.innerHTML = `<p id = 'script-today'>TODAY</p> <form id = 'todayForm'><input class = 'focus-checkbox'type = 'checkbox' ><span class = 'focusText'>${todayFocus}</span>
  <button type="button" class="btn btn-outline-light btn-sm"></button></form>`
  const deleteBtn = document.querySelector('.btn-outline-light');
  deleteBtn.addEventListener('click', deleteToday);
}
//여기
if (todayFocus) {
  todoConfirm();
}


const clickTodo = (e) => {
  todoLists.classList.toggle('lists');
}


const inputTodo = (e) => {
  doTemp = e.target.value;
}

const listInputChange = (e) => {
  listInput = e.target.value;
}

const handleListFormSubmit = (e) => {
  e.preventDefault();
  let newList = document.createElement('li');
  document.querySelector('.todo-lists').appendChild(newList);
  let checkBtn = document.createElement('input');
  checkBtn.setAttribute('type', 'checkbox');
  listInputItems.push(listInput);
  localStorage.setItem('todoItems', JSON.stringify(listInputItems));
  let delBtn = document.createElement('btn');
  delBtn.innerText = '✖';
  delBtn.addEventListener('click', e => e.target.parentNode.remove())
  newList.append(checkBtn, listInput, delBtn);
  todoListForm.querySelector('input').value = '';
  listInput = '';
}


const todoPopUp = () => {
  todoSquare.classList.toggle('pop')
}

const signOutClick = () => {
  localStorage.clear();
  location.reload();
}



askName.addEventListener('submit', handdleNameSubmit);
nameInput.addEventListener('input', handleNameInput);
todayInput.addEventListener('input', inputToday);
todayForm.addEventListener('submit', submitFocus);
todoText.addEventListener('click', todoPopUp);
todoListInput.addEventListener('change', listInputChange)
todoListForm.addEventListener('submit', handleListFormSubmit);
signOut.addEventListener('click', signOutClick)