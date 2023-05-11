// rpgV0.15.0 패치노트
// - 최초 turnCount 값을 0에서 1로 수정하였습니다.
// - 이동 버튼을 추가하였습니다.(동 서 남 북)
// - 이동 함수들을 추가하였습니다. (이동 메세지 출력과 턴 진행을 수행합니다.)
// - 실행 시 '전투시작' 메세지를 삭제하였으며 이는 추후 전투모드 전환 시 재추가 예정입니다.
// 이동버튼 전까지만 했당...
var orc;
var elf;
var tv_1;       // first screen
var tv_2;       // second(middle) screen
var tv_3;       // third(bottom) screen
var str1 = "";  // tv1's text
var str2 = "";  // tv2's text
var str3 = "";  // tv3's textz
var turnCount = 1;   // turn number


window.onload = function () {

    tv_1 = document.getElementById("a");
    tv_3 = document.getElementById("screenPlayerInfo");
    input_turn.value = turnCount;

    orc = new Monster("하급 오크", 100, 10, 150);
    elf = new Champion("케일", 75, 18, 0);
    elf.info();
    orc.info();
}

