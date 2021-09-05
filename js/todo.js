const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 값이 추가되어야 하기에 let을 사용한다. 
let toDos = []; 

//입력한 todo를 로컬 스코리지에 넣는다. 값을 string형태로 넣는다. 
//이렇게 넣어야 이후에 array 화가 가능해진다 . 
function saveToDos (){
    ///JSON.stringify() 를 넣으면 입력받은 값 or 밸류값을 srting으로 바꿔준다.
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    /// x버튼을 누르는 이벤트에 대한 target의 부모 엘리먼트를 찾아온다. 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedToDos();
}

function paintToDo(newTodo){
    //html에 li와 span tag 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    ///span의 innerText에 newTodo에 입력되는 값을 저장 
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    ///appendchild를 이용해서 li밑으로 span을 넣었음 
    li.appendChild(span);
    li.appendChild(button);    
    ///toDoList변수안에 appendChild인 li추가 
    toDoList.appendChild(li);
}


function handleToDoSummit(event){
    event.preventDefault();
    ///newTod변수로 기존 밸류를 넣기 
    const newTodo = toDoInput.value;
    ///그리고 기존 변수로 넣은 후에 입력필드는 비우기 
    toDoInput.value = "";
    ///newTodoDobj를 만들어서 text엔 입력한 값, id에는 랜덤한 숫자를 주어서 id화 한다.
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    };
    //todo를 입력받은 내용을 toDos array에 push로 넣기 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSummit);

///입력한 todo에 대해서 로컬스토리에서 가져오고 이를 array화 하는 과정 
const savedToDos = localStorage.getItem(TODOS_KEY);

///savedToDos가 있으면, string으로 로컬 스토리에 저장된 todo에 대해서 parse해서 array화 
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    ///=> 화살표 평션이라고 한다 . 
    //parsedToDos.forEach((item) => console.log("this is turn of",item));
    parsedToDos.forEach(paintToDo);
}

