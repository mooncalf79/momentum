const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"; ///텍스트만 들어간 변수는 대문자로 표현한다., css에 hidden이 있음 
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); //submit하면 리프레시 되니 이 기능을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    localStorage.setItem(USERNAME_KEY,loginInput.value);///브라우저의 로컬스토리지에 저장 
    paintGreeting();
    }

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username} Welcome`;/// ₩₩로 사용하며, ${}에 함수를 넣는다. 
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    paintGreeting();
}
