//js
// 버튼토글로 이미지가 보였다 안보였다 처리
var btn;
var imgCat;
var isPopOpened = false;
window.onload = function(){
    btn = document.getElementById("btn");
    imgCat = document.getElementById("cat");
    btn.addEventListener("click",popup);
}

function popup(){

    if(isPopOpened == true){
        isPopOpened = false;
        imgCat.style.display = "none";
    }else{
        isPopOpened = true;
        imgCat.style.display = "inline";
    }
}


