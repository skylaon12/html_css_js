var input_id;
var input_pw;


var str_id = "";
var str_pw = "";

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    str_id = input_id.value;
    str_pw = input_pw.value;
}
function login(){
    alert("id : " + id.value + "\npw : " + pw.value);
}
