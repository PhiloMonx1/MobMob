'use strict';

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("todo-list");
const todoInput = todoForm.querySelector("input");


function submitTodos(event){
    // event.preventDefault();
    console.log(todoInput.value);
}

todoForm.addEventListener("submit", submitTodos)