'use strict';

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const allDeleteBtn = todoList.querySelector(".super-delete")
let toDos = [];
const TODO_LIST = "TodoList";

function submitTodos(event) {
    event.preventDefault();
    const newText = todoInput.value;
    todoInput.value = "";
    const newTodo = {
        text: newText,
        id: Date.now()
    };
    if (toDos.length < 10) {
        toDos.push(newTodo);
        appendTodos(newTodo);
        saveToDos();
    } else {
        alert("일정이 너무 많아요!")
    }

}
function appendTodos(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("i")
    if (localStorage.getItem(li.id) === "true") { //checkTodos on
        button.setAttribute("class", "fa-regular fa-square-check");
        span.className = "checkLine";
    } else {
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
function deleteTodos(btn) {
    const me = btn.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(me.id))
    me.remove();
    saveToDos();
    localStorage.removeItem(me.id) //checkTodos
}
function saveToDos() {
    localStorage.setItem(TODO_LIST, JSON.stringify(toDos))
}
function checkTodos(check) {
    const parent = check.target.parentElement;
    const bro = parent.children[1];
    if (localStorage.getItem(parent.id) === "false") {
        check.target.className = "fa-regular fa-square-check";
        bro.className = "checkLine";
        localStorage.setItem(parent.id, "true")
    } else if (localStorage.getItem(parent.id) === "true") {
        check.target.className = "fa-regular fa-square";
        bro.className = "";
        localStorage.setItem(parent.id, "false")
    } else {
        alert("miss!!");
        localStorage.setItem(parent.id, "false")
    }
}
function deleteAll(){
    const deletes = document.querySelectorAll(".checkLine")
    for (let i = 0; i < toDos.length; i++) {
        if(deletes[i].className == "checkLine"){
            console.dir(deletes[i].parentElement)
            deletes[i].parentElement.remove();
        }else{
            console.log("삭제 x")
        }
    }
}

todoForm.addEventListener("submit", submitTodos);
allDeleteBtn.addEventListener("click", deleteAll);


if (!(localStorage.getItem(TODO_LIST) == null)) {
    toDos = JSON.parse(localStorage.getItem(TODO_LIST));
    toDos.forEach(appendTodos);
}