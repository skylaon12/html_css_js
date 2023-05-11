// rpgV0.14.0 패치노트
// - 메세지 textarea 의 글이 길어질 경우 스크롤이 자동으로 아래로 내려가도록 처리하였습니다.
// - main.js의 function들을 function.js로 분리하였습니다.
// - endBattle() 의 currentMode="비전투" 를 "대기"로 변경하였습니다..?
//      -> 음... endBattle 함수를 하나 만들어야겠네
//      -> currentMode는 몬스터한테 적용해야하는걸까..? 추가해보지 뭐
var orc;
var elf;
var tv_1;       // first screen
var tv_2;       // second(middle) screen
var tv_3;       // third(bottom) screen
var str1 = "";  // tv1's text
var str2 = "";  // tv2's text
var str3 = "";  // tv3's textz
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

