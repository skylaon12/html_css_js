
var input_id;
var input_pw;
var str_id;
var str_pw;

input_id = document.getElementById("id");
input_pw = document.getElementById("pw");

function login(){
    str_id = input_id.value;
    str_pw = input_pw.value;
  
    if(str_id == "" || str_pw == ""){
        alert("ID또는 PW를 전부 입력하시오.");
    }
    else if(str_id == "cat" && str_pw == "1234"){
      alert("로그인 성공!\n환영합니다 " + str_id + "님");
    }else
      alert("존재하지 않는 ID또는 PW정보입니다.");
    
}
  