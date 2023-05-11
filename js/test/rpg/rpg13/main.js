// rpgV0.13.0 패치노트
// - 전투 종료 후 턴 진행 시 전투가 더 진행되지 않게 처리하였습니다.
// - 전투 종료 시 적 오브젝트를 처리하였습니다.
//      -> 전투가 끝났으니 더 이상 나오지 않게 하였습니다.

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

function test(){
    if(orc.hp > 0){
        input_turn.value = ++turn;
        fight(elf, orc);
    }else{
        console.log(orc.hp);
        tv1("전투가 이미 종료되었습니다.")
        hr();
    }
}