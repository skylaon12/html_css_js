var input_id;
var input_pw;
var str_id = "";
var str_pw = "";

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
}
function login(){
    str_id = input_id.value;
    str_pw = input_pw.value;
 
    if(str_id == "cat" && str_pw == "1234"){
        alert("로그인성공!");
    }else{
        alert("로그인실패!");
    }

    
}
