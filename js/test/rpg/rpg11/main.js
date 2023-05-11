// rpgV0.11.0 패치노트
// - 턴 진행 버튼을 추가하였습니다.
// - 테스트로 턴 진행 버튼에 console.log를 적용하였습니다
// - 턴 진행 버튼 왼쪽에 턴수를 표시하는 input text를 추가하였습니다,

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
    orc.info();
    elf.info();

    hr();
    tv1("전투 시작");
    hr();

    fight(elf, orc);

    elf.info();
}

function test(){
    console.log("턴찍기");
    input_turn.value = ++turn;
}