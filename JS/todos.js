'use strict';

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const allDeleteBtn = todoList.querySelector(".super-delete")
let toDos = [];
let point = 0;
const TODO_LIST = "TodoList";
const pointDle = document.querySelector(".fa-share-nodes");


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
        const menuBox = document.createElement("div")
        const ui = document.createElement("ui")
        const liDel = document.createElement("li")
        const spanDel = document.createElement("span")
        const liEdi = document.createElement("li")
        const spanEdi = document.createElement("span")
        menuBox.id = "menuBox"
        menuBox.classList = "hidden"
        menuBox.addEventListener("click", togleMenu)
        spanDel.innerText = "삭제"
        spanDel.addEventListener("click", deleteTodos)
        spanEdi.innerText = "수정"
        spanEdi.addEventListener("click", editTodos)
        liEdi.appendChild(spanEdi)
        liDel.appendChild(spanDel)
        ui.appendChild(liEdi)
        ui.appendChild(liDel)
        menuBox.appendChild(ui)
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.id ="span";
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
        more.addEventListener("click", togleMenu);
        // more.addEventListener("click", editTodos);
        more.appendChild(menuBox)
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(more);
    todoList.appendChild(li);
}
function deleteTodos(btn) {
    const me = btn.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    toDos = toDos.filter(toDos => toDos.id !== parseInt(me.id))
    if(localStorage.getItem(me.id) === "true"){
        me.remove();
        point += 1;
    }else{
        me.remove();
    }
    saveToDos();
    localStorage.removeItem(me.id) //checkTodos
}
function editTodos(btn){
    const me = btn.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    let input = prompt('일정을 입력하세요') 
    if(input === null || input === ""){
    }else{
        me.children[1].innerText = input;
        for(let i = 0; i < toDos.length; i++){
            if(toDos[i].id === parseInt(me.id)){
                toDos[i].text = input;
            }
        }
    }
    saveToDos()
}
function saveToDos() {
    localStorage.setItem(TODO_LIST, JSON.stringify(toDos))
}
function togleMenu(event){
    const box = event.target.firstChild;
    box.classList.toggle("hidden")
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
        console.log("miss");
        localStorage.setItem(parent.id, "false")
    }
}
function deleteAll(){
    const toDoText = document.querySelectorAll("#span");
    let j = 0; // 인덱스가 지워지면서 toDos의 길이 짧아지는 이슈
    for (let i = 0; i < toDos.length; i++) {
        const checking = toDoText[j].parentElement;
        if(toDoText[j].className === "checkLine"){
            toDos = toDos.filter(toDos => toDos.id !== parseInt(checking.id))
            if(localStorage.getItem(checking.id) === "true"){
                checking.remove();
                point += 1;
                cntPoint()
            }else{
                checking.remove();
            }
            saveToDos();
            localStorage.removeItem(checking.id)
            i--// 짧아진 toDos를 따라가는 i를 if문 안에 만들고
        }
        j++// 인덱스는 J로 따로 돌려주는 것을 해결
    }
    onPoint()
}
function cntPoint(){
    localStorage.setItem("point", point);
}
function onPoint(){
    if (!(localStorage.getItem("point") == null)){
        if(parseInt(localStorage.getItem("point")) > 10){
            console.log(`OMG!!! ${localStorage.getItem("point")}포인트 라구요??`);
        }
        point = parseInt(localStorage.getItem("point"));
        allDeleteBtn.innerText = `현재 포인트 : ${localStorage.getItem("point")}점`;
    }
}
function dlePoint(){
    localStorage.setItem("point", "0");
    point = parseInt(localStorage.getItem("point"));
    onPoint();
}



todoForm.addEventListener("submit", submitTodos);
allDeleteBtn.addEventListener("click", deleteAll);
pointDle.addEventListener("click", dlePoint);


if (!(localStorage.getItem(TODO_LIST) == null)) {
    toDos = JSON.parse(localStorage.getItem(TODO_LIST));
    toDos.forEach(appendTodos);
}
onPoint()