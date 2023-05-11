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

// 전투
// 두 캐릭터가 전투를 개시
// 첫번째 parameter 를 champion 두번째 parameter를 monster로 가정
// 어느 한 쪽의 hp가 0 이하가 될 때까지 서로 1회씩 공격하며 공격 이후 서로의 정보 출력
function fight(Unit1, Unit2){
    while((Unit1.hp > 0) && (Unit2.hp > 0)){
        Unit1.attack(Unit2);
        Unit2.attack(Unit1);
        Unit1.info();
        Unit2.info();
        hr();      
    }
}