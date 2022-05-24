'use strict';

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
let toDos = [];
const TODO_LIST = "TodoList";

function submitTodos(event){
    event.preventDefault();
    const newText = todoInput.value;
    todoInput.value = "";
    const newTodo = {
        text : newText,
        id : Date.now()
    };
    toDos.push(newTodo);
    appendTodos(newTodo);
    saveToDos();
}
function appendTodos(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("i")
    button.setAttribute("class", "fa-solid fa-circle-xmark");
    button.addEventListener("click", deleteTodos);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}
function deleteTodos(btn){
    const me = btn.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(me.id))
    me.remove();
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODO_LIST ,JSON.stringify(toDos))
}

todoForm.addEventListener("submit", submitTodos);
 
if(!(localStorage.getItem(TODO_LIST) == null)){
    toDos = JSON.parse(localStorage.getItem(TODO_LIST));
    toDos.forEach(appendTodos);
}