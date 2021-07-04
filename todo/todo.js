const show = document.querySelector('#show');

const askName = document.querySelector('.ask-name');
const nameForm = document.querySelector('.name-form');
const nameInput = document.querySelector('.name-input');
const time = document.querySelector('#time');
const todayInput = document.querySelector('.todayForm input');
const todayForm = document.querySelector('.todayForm')
const today = document.querySelector('.today');
const good = document.querySelector('#good');
const todoBtn = document.querySelector('#todo-btn');
const todoLists = document.querySelector('.todoLists')
const lists = document.querySelector('.lists')
const doLists = document.querySelector('.doLists')
const newTodo = document.querySelector('.newTodo')
const todoInput = document.querySelector('.newTodo input')
let nameStorage = '';
let todayFocus = localStorage.getItem('todayFocus');
let myName = '';
let doTemp = '';


const timer = () => {
  const now = new Date();
  const hour = String(now.getHours() > 12 ? now.getHours() -12 : now.getHours()).padStart(2, '0');
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

const submitFocus = (e) => {
  e.preventDefault();
  today.innerHTML = `<p id = 'script-today'>TODAY</p> <input class = 'focus-checkbox'type = 'checkbox'>${todayFocus}`
}

if (new Date().getHours() <=12) {
  good.innerText = `Good Morning, `
}else if(new Date().getHours() <= 18){
  good.innerText = `Good Morning, `
}else if (new Date().getHours() <= 4){
  good.innerText = `Good Morning, `
}

if (userName) {
  askName.style.display = 'none';
  document.querySelector('.hidden-wrapper').style.display = 'block'
  good.innerHTML += localStorage.getItem('myName');
}

if(todayFocus) {
  today.innerHTML = `<p id = 'script-today'>TODAY</p> <input class = 'focus-checkbox'type = 'checkbox'>${todayFocus}`
}


const clickTodo = (e) => {
  todoLists.classList.toggle('lists');
}


const inputTodo = (e) => {
  doTemp = e.target.value;
}

const submitTodo = (e) => {
  e.preventDefault();
  doLists.innerHTML += `<li><input type = 'checkbox'>${doTemp}</li>`
  todoInput.value = '';
}


askName.addEventListener('submit', handdleNameSubmit);
nameInput.addEventListener('input', handleNameInput);
todayInput.addEventListener('input', inputToday);
todayForm.addEventListener('submit', submitFocus);
todoBtn.addEventListener('click', clickTodo);
lists.addEventListener('click', (e) => {
  e.stopPropagation()
})
newTodo.addEventListener('submit', submitTodo)
todoInput.addEventListener('input', inputTodo)
