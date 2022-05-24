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
    if(localStorage.getItem(li.id) === "true"){ //checkTodos on
        button.setAttribute("class", "fa-regular fa-square-check");
    }else{
        button.setAttribute("class", "fa-regular fa-square");
        localStorage.setItem(li.id, "false") //checkTodos new&off
    }
    button.addEventListener("click", checkTodos);
    const more = document.createElement("i")
    more.setAttribute("class", "fa-solid fa-ellipsis");
    more.addEventListener("click", deleteTodos);
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(more);
    todoList.appendChild(li);
}
function deleteTodos(btn){
    const me = btn.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(me.id))
    me.remove();
    saveToDos();
    localStorage.removeItem(me.id) //checkTodos
}
function saveToDos(){
    localStorage.setItem(TODO_LIST ,JSON.stringify(toDos))
}
function checkTodos(check){
    const parent = check.target.parentElement;
    if(localStorage.getItem(parent.id) === "false"){
        check.target.className = "fa-regular fa-square-check";
        localStorage.setItem(parent.id, "true")
    }else if(localStorage.getItem(parent.id) === "true"){
        check.target.className = "fa-regular fa-square";
        localStorage.setItem(parent.id, "false")
    }else{
        alert("miss!!");
        localStorage.setItem(parent.id, "false")
    }
}

todoForm.addEventListener("submit", submitTodos);

if(!(localStorage.getItem(TODO_LIST) == null)){
    toDos = JSON.parse(localStorage.getItem(TODO_LIST));
    toDos.forEach(appendTodos);
}