const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours}:${minutes}:${seconds < 10 ?`0${seconds}`: seconds}`;
    
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();
//setInterval (fn, 1000)<-첫번째 인자는 함수고, 두번째 인자는 실행 간격 시간
