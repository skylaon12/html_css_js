//js
// 버튼토글로 이미지가 보였다 안보였다 처리
var btn;
var popup;
var isPopOpened = false;
window.onload = function(){
    btn = document.getElementById("btn_close");
    popup = document.getElementById("popup");
    btn.addEventListener("click",popdown);
}

function popdown(){
    if(isPopOpened == true){
        isPopOpened = false;
        popup.style.display = "none";
    }else{
        isPopOpened = true;
        popup.style.display = "inline";
    }
}


