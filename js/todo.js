const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// document.querySelector("#todo-form input")과 동일함!
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // 버튼의 부모 요소인 li를 활용하여 li를 삭제!
    // 구분하기 전엔 모든 버튼이 같은 function에 동시 작동
    // console.log(event);
    // 여기서 path 확인, target은 'li' parentNode 혹은 parentElement
    // console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
    // appendChild는 가장 하단에 위치
}

// function paintToDo(newToDo) {
//     const li = document.createElement("li");
//     // li 안에 span 추가해서 만들기 / button을 추가해야 하기 때문에
//     const span = document.createElement("span");
//     li.appendChild(span);
//     span.innerText = newToDo;
//     toDoList.appendChild(li);
// }

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     // console.log("hello");
//     console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// savedToDos가 null 되는 경우가 있음(아무 것도 입력하지 않았을 때)

console.log(savedToDos);
if (savedToDos !== null) {
    // savedToDos !== null 이라고 작성해도 가능
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    // parsedToDos.forEach(sayHello); 과 동일하게
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // arrow function!
}