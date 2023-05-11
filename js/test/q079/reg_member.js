
var input_id;
var input_pw;
var input_pw_re;

var str_id;
var str_pw;
var str_pw_re;
window.onload = function () {

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_pw_re = document.getElementById("pw_re");
}

function register() {
    str_id = input_id.value;
    str_pw = input_pw.value;
    str_pw_re = input_pw_re.value;

    if (str_id.length < 4 || str_id.length > 12) {
        alert("ID의 길이를 4자 이상 12자 이하로 입력해 주십시오.");
    }
    else if (str_pw.length < 4 || str_pw.length > 12) {
        alert("패스워드의 길이를 4자 이상 12자 이하로 입력해 주십시오.");
    }
    else if (str_pw != str_pw_re)
        alert("비밀번호가 일치하지 않습니다. 다시 입력하십시오.");
    else
        alert("회원가입이 완료되었습니다. 환영합니다.");
}
