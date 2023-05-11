// rpgV0.9.0 패치노트
// - 출력 중 hr()을 모두 제거하였습니다.
// - br()도 모두 제거하였습니다.
// - 정보 출력을 textarea에 하도록 변경하였습니다.
// Unit 클래스를 제거했습니다.. 초반에 이해를 잘해야 하는 이유..


var orc;
var elf;
var t;
var str = "";

window.onload = function () {

    t = document.getElementById("a");

    orc = new Monster("하급 오크", 100, 10, 150);
    elf = new Champion("케일", 75, 18, 0);
    orc.info();
    elf.info();

    hr();
    dw("전투 시작");
    hr();

    fight(elf, orc);

    elf.info();
}