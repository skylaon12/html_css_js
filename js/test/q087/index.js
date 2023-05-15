//js
// 닫기 버튼을 누르면 팝업 폭과 높이 색상이 천천히 바뀌게
// 한 번 누르면 확대하고 색 바꾸고 다시 누르면 원래대로 돌아가는 방식 
var btn;
var popup;
var isPopClicked = false;
window.onload = function(){
    btn = document.getElementById("btn_close");
    popup = document.getElementById("popup");
    btn.addEventListener("click",popdown);
}

function popdown(){
    if(isPopClicked == false){
        isPopClicked = true;
        popup.style.color = "blue";
        popup.style.width = "500px";
        popup.style.height = "500px";
        popup.style.background = "gray";
        popup.style.transitionProperty = "color, width, background"
        popup.style.transitionDuration = "2s"
        
    }else{
        isPopClicked = false;
        popup.style.color = "red";
        popup.style.width = "300px";
        popup.style.height = "300px";
        popup.style.background = "purple";
        popup.style.transitionProperty = "color, width, background"
        popup.style.transitionDuration = "2s"
    }
}


