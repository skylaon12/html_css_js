// 로그인 폼에 회원가입 버튼 추가
// 회원가입 버튼 클릭 시 reg_member.html 페이지로 링크 이동 처리

var input_id;
var input_pw;
var box;
var str_box;
var str_id = "";
var str_pw = "";

var now = new Date();
var time = now.getFullYear() + "년 " + now.getMonth() + "월 " + now.getDate() + "일 " + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초 " + now.getMilliseconds() + "밀리초";
window.onload = function () {


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    box = document.getElementById("box");

}

document.write(time);

function login() {
    str_id = input_id.value;
    str_pw = input_pw.value;

    if (str_id == "cat" && str_pw == "1234") {
        alert("로그인성공!");
        box.innerHTML = str_id + " 회원님 반갑습니다.";
    } else {
        alert("로그인실패!");
    }
}

