const clock = document.querySelector("h2#clock");

function getClock(){
    // new Date() 로 현재 시간을 가져온다.
    const date = new Date();
    ///gethours와 같은 시간은 int타입이니 String으로 char로 변경 후 padStart로 2자로 고정 및 비는 공간에 "0"을 추가한다.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침하면 시계를 바로 호출
setInterval(getClock,1000); //1초뒤에 getClock함수를 호출한다.

// setInterval(sayHello, 5000); ///setInterval은 실행되는 시간을 딜레이 한다, 반복실행/시간은 ms기준 5000 : 5초 -> 5초 간격으로 실행

// setTimeout(sayHello,5000);///setInterval은 실행되는 시간을 딜레이 한다/시간은 ms기준 5000 : 5초 -> 5초뒤에 실행

