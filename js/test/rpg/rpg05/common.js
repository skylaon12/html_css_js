// 공통함수영역
function dw(str){
    document.write(str);
}
function br(){
    dw("<br>");
}
function hr(){
    document.write("<hr>");
}

// 공격력을 해당 공격력 수치와 0 사이의 값이 랜덤으로 나오도록 함수 추가
function getRandomAttackValue(ad){
    var rand_ad = Math.floor(Math.random() * ++ad); // ad가 10이라면 0~10까지므로 ++처리
    return rand_ad;
}

function fight(Unit1, Unit2){
    Unit1.attack(Unit2);
    Unit2.attack(Unit1);
}