// rpgV0.10.0 패치노트
//  - tv() 이름을 tv()로 변경하였습니다
//      -> textareaValueSetText줄여서 tv로 표현했습니다.
//  - textarea를 두 개 추가하였습니다.
//  - 플레이어 정보 출력을 분리하였습니다.
//      -> ex) [하늘(70/100)](exp: 100/300) 을 새 textarea (id - screenPlayerInfo) 로 분리하였습니다.

var orc;
var elf;
var tv_1;       // 첫번째 스크린
var tv_2;       // 두번째(중앙) 스크린
var tv_3;       // 세번째(하단) 스크린
var str1 = "";  // tv1's text
var str2 = "";  // tv2's text
var str3 = "";  // tv3's text

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