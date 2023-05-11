// 로그인 성공시 로그인 입력박스 div 내에
// id 회원님 반갑습니다. 이런 메세지 추가하기
var input_id;
var input_pw;
var box;
var str_box;
var str_id = "";
var str_pw = "";

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    box = document.getElementById("box");    
}
function login(){
    str_id = input_id.value;
    str_pw = input_pw.value;
 
    if(str_id == "cat" && str_pw == "1234"){    
        alert("로그인성공!");
        box.innerHTML = str_id + " 회원님 반갑습니다.";
    }else{
        alert("로그인실패!");
    }

    
}
