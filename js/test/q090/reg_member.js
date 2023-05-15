
var input_id;
var input_pw;
var input_pw_re;
var input_mail1;
var input_mail2;
var input_birth1;
var input_birth2;
var input_birth3;
var input_sex;
var input_phone1;
var input_phone2;
var input_phone3;


var str_id;
var str_pw;
var str_pw_re;
var str_mail;
var str_birth
var str_sex;
var str_phone;
window.onload = function () {

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_pw_re = document.getElementById("pw_re");
    input_mail1 = document.getElementById("mail_1");
    input_mail2 = document.getElementById("mail_2");
    input_birth1 = document.getElementById("bir_y");
    input_birth2 = document.getElementById("bir_m");
    input_birth3 = document.getElementById("bir_d");
    input_sex = document.getElementsByName("sex");
    input_phone1 = document.getElementById("phone_1")
    input_phone2 = document.getElementById("phone_2")
    input_phone3 = document.getElementById("phone_3")

}

function register() {

    if (idCheck() == pwCheck() && pwCheck() == 1) {
        str_mail = input_mail1.value + "@" + input_mail2.value;
        str_birth = input_birth1.value + "-" + input_birth2.value + "-" + input_birth3.value;

        for (var i = 0; i < input_sex.length; i++) {
            if (input_sex[i].checked == true)
                str_sex = input_sex[i].value;
        }

        str_phone = input_phone1.value + "-" + input_phone2.value + "-" + input_phone3.value;
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
    var print2 = "\nEmail : " + str_mail + "\nBirth : " + str_birth;
    var print3 = "\nGender : " + str_sex + "\nPhoneNumber : " + str_phone;
    alert(print1 + print2 + print3);

}
