// rpgV0.12.0 패치노트
// - 전투를 턴버튼을 누를 때마다 한 턴씩 진행하도록 수정하였습니다.
// - 적 간략 정보가 textarea game object에 나오도록 수정하였습니다.

var orc;
var elf;
var tv_1;       // first screen
var tv_2;       // second(middle) screen
var tv_3;       // third(bottom) screen
var str1 = "";  // tv1's text
var str2 = "";  // tv2's text
var str3 = "";  // tv3's text
var turn = 0;   // turn number


window.onload = function () {

    tv_1 = document.getElementById("a");
    tv_3 = document.getElementById("screenPlayerInfo");
    orc = new Monster("하급 오크", 100, 10, 150);
    elf = new Champion("케일", 75, 18, 0);
    elf.info();
    orc.info();


    hr();
    tv1("전투 시작");
    hr();
}

function test(){
    console.log("턴찍기");
    input_turn.value = ++turn;    
    fight(elf, orc);
}