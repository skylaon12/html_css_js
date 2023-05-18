
var input_id;
var input_pw;
var input_pw_re;
var input_name;
var input_mail;
var input_bir;
var input_phone;


var str_id;
var str_pw;
var str_pw_re;
var str_mail;
var str_name;
var str_bir;
var str_phone;


input_id = document.getElementById("new_id");
input_pw = document.getElementById("new_pw");
input_pw_re = document.getElementById("pw_re");
input_name = document.getElementById("name");
input_mail = document.getElementById("email");
input_bir = document.getElementById("bir");
input_phone = document.getElementById("phone")


function register() {

    if (idCheck() == pwCheck() && pwCheck() == 1) {
        str_mail = input_mail.value;
        str_bir = input_bir.value;
        str_phone = input_phone.value;

        alert("회원가입이 완료되었습니다. 환영합니다.");
        alert_info();
    }

}

function idCheck() {
    str_id = input_id.value;
    if (str_id.length < 4 || str_id.length > 12) {
        alert("ID의 길이를 4자 이상 12자 이하로 입력해 주십시오.");
        console.log("ID 길이 부적합");
        return 0;
    }
    return 1;
}

function pwCheck() {
    str_pw = input_pw.value;
    str_pw_re = input_pw_re.value;

    if (str_pw.length < 4 || str_pw.length > 12) {
        alert("패스워드의 길이를 4자 이상 12자 이하로 입력해 주십시오.");
        console.log("PW 길이 부적합");
        return 0;
    }
    else if (str_pw != str_pw_re) {
        alert("비밀번호가 일치하지 않습니다. 다시 입력하십시오.");
        console.log("PW 불일치");
        return 0;
    }
    return 1;
}

function alert_info() {
    var print1 = "회원가입을 환영합니다!\n ID : " + str_id + "\nPW : " + str_pw;
    var print2 = "\nEmail : " + str_mail + "\nBirth : " + str_bir + "\nPhoneNumber : " + str_phone;
    alert(print1 + print2);

}
